import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { MySqlPrismaService } from 'src/prisma-db/mysql-prisma.service';
import { PaginateFiltroDto } from './dto/paginate-filtro.dto';
import { Prisma } from 'prisma/clients/mysql-client';

@Injectable()
export class TransaccionService {
  private readonly logger = new Logger(TransaccionService.name);

  constructor(private readonly mysqlPrisma: MySqlPrismaService) {}

  async crearTransaccion(createTransaccionDto: CreateTransaccionDto) {
    this.logger.log(
      `Iniciando transacción ${JSON.stringify(createTransaccionDto)}`,
    );

    return this.mysqlPrisma.$transaction(
      async (prisma) => {
        // Validar que al menos una cuenta esté especificada
        if (
          !createTransaccionDto.cuentaOrigenId &&
          !createTransaccionDto.cuentaDestinoId
        ) {
          throw new BadRequestException(
            'Debe especificar al menos una cuenta de origen o destino',
          );
        }

        // Validar propiedad de las cuentas
        if (createTransaccionDto.cuentaOrigenId) {
          await this.validarPropiedadCuenta(
            createTransaccionDto.usuarioId,
            createTransaccionDto.cuentaOrigenId,
          );
        }

        // Validar el tipo de transacción
        const tipoTransaccion = await prisma.tipoTransaccion.findUnique({
          where: { secuencial: createTransaccionDto.tipoTransaccionId },
        });
        if (!tipoTransaccion)
          throw new NotFoundException('No se encontró el tipo de transacción');

        // Validar límites diarios
        await this.validarLimitesDiarios(createTransaccionDto);

        // Función para actualizar el saldo de una cuenta
        const actualizarSaldo = async (cuentaId: number, monto: number) => {
          const cuenta = await prisma.cuenta.findUnique({
            where: { secuencial: cuentaId },
            select: {
              saldo: true,
              estado: true,
              secuencial: true,
              numeroCuenta: true,
            },
          });

          if (!cuenta) {
            throw new NotFoundException(
              `Cuenta con ID ${cuentaId} no encontrada`,
            );
          }
          if (cuenta.estado !== 'ACTIVA') {
            throw new ConflictException(`La cuenta ${cuentaId} no está activa`);
          }
          // ! Corregir el saldo de la cuenta
          if (cuenta.saldo + monto < 0) {
            throw new BadRequestException(
              `Saldo insuficiente en la cuenta ${cuenta.numeroCuenta}`,
            );
          }

          return prisma.cuenta.update({
            where: { secuencial: cuentaId },
            data: { saldo: { increment: monto } },
          });
        };

        // Realizar la transacción
        if (createTransaccionDto.cuentaOrigenId) {
          await actualizarSaldo(
            createTransaccionDto.cuentaOrigenId,
            -createTransaccionDto.monto,
          );
        }

        if (createTransaccionDto.cuentaDestinoId) {
          await actualizarSaldo(
            createTransaccionDto.cuentaDestinoId,
            createTransaccionDto.monto,
          );
        }

        // Crear el registro de la transacción
        const nuevaTransaccion = await prisma.transaccion.create({
          data: {
            monto: createTransaccionDto.monto,
            estado: 'COMPLETADA',
            descripcion: createTransaccionDto.descripcion,
            TipoTransaccion: {
              connect: { secuencial: tipoTransaccion.secuencial },
            },
            CuentaOrigen: createTransaccionDto.cuentaOrigenId
              ? {
                  connect: { secuencial: createTransaccionDto.cuentaOrigenId },
                }
              : undefined,
            CuentaDestino: createTransaccionDto.cuentaDestinoId
              ? {
                  connect: { secuencial: createTransaccionDto.cuentaDestinoId },
                }
              : undefined,
          },
        });

        this.logger.log(
          `Transacción completada: ${nuevaTransaccion.secuencial}`,
        );

        // TODO: Emitir evento de transacción completada

        return nuevaTransaccion;
      },
      {
        maxWait: 5000, // Espera máxima de 5 segundos para el bloqueo
        timeout: 10000, // Tiempo máximo de ejecución de 10 segundos
      },
    );
  }

  async obtenerTransaccion(id: number) {
    try {
      const transaccion = await this.mysqlPrisma.transaccion.findUnique({
        where: { secuencial: id },
        include: {
          TipoTransaccion: true,
          CuentaOrigen: true,
          CuentaDestino: true,
        },
      });

      if (!transaccion) {
        throw new NotFoundException('Transacción no encontrada');
      }
      return transaccion;
    } catch (error) {
      console.log(error);
      this.handleDBErrors(error);
    }
  }

  async listarTransacciones(usuarioId: number, filtros: PaginateFiltroDto) {
    // TODO: Asegurar que funcione la paginación y filtros
    const where: Prisma.TransaccionWhereInput = {
      OR: [
        { CuentaOrigen: { persona: { secuencial: usuarioId } } },
        { CuentaDestino: { persona: { secuencial: usuarioId } } },
      ],
      // Aplicar filtros tradicionales
      ...(filtros.cuentaId && {
        OR: [
          { cuentaOrigenId: filtros.cuentaId },
          { cuentaDestinoId: filtros.cuentaId },
        ],
      }),
      ...(filtros.fechaInicio && {
        fechaTransaccion: { gte: filtros.fechaInicio },
      }),
      ...(filtros.fechaFin && { fechaTransaccion: { lte: filtros.fechaFin } }),
      ...(filtros.tipoTransaccionId && {
        tipoTransaccionSecuencial: filtros.tipoTransaccionId,
      }),
      ...(filtros.estado && { estado: filtros.estado }),
    };

    const total = await this.mysqlPrisma.transaccion.count({ where });
    const transacciones = await this.mysqlPrisma.transaccion.findMany({
      where,
      include: {
        TipoTransaccion: true,
        CuentaOrigen: {
          select: {
            secuencial: true,
            numeroCuenta: true,
            persona: { select: { nombreUnido: true } },
          },
        },
        CuentaDestino: {
          select: {
            secuencial: true,
            numeroCuenta: true,
            persona: { select: { nombreUnido: true } },
          },
        },
      },
      orderBy: { fechaTransaccion: 'desc' },
      skip: (filtros.pagina - 1) * filtros.elementosPorPagina,
      take: filtros.elementosPorPagina,
    });

    return {
      meta: {
        totalTransacciones: total,
        pagina: filtros.pagina,
        elementosPorPagina: filtros.elementosPorPagina,
        totalPaginas: Math.ceil(total / filtros.elementosPorPagina),
      },
      data: transacciones,
    };
  }

  // Manejo de errores
  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    if (error.status === 404)
      throw new NotFoundException(error.response.message);
    if (error.status === 400)
      throw new BadRequestException(error.response.message);
    if (error.status === 409)
      throw new ConflictException(error.response.message);

    console.log(error);

    throw new InternalServerErrorException('Algo salió mal, Revisa los logs');
  }

  // Funciones adicionales
  private async validarLimitesDiarios(dto: CreateTransaccionDto) {
    const LIMITE_DIARIO = 10000; // Ejemplo de límite diario - 10,000 USD
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const transaccionesHoy = await this.mysqlPrisma.transaccion.findMany({
      where: {
        OR: [
          { cuentaOrigenId: dto.cuentaOrigenId },
          { cuentaDestinoId: dto.cuentaOrigenId },
        ],
        fechaTransaccion: {
          gte: hoy,
        },
      },
      select: {
        monto: true,
      },
    });

    const totalHoy = transaccionesHoy.reduce((sum, t) => sum + t.monto, 0);
    if (totalHoy + dto.monto > LIMITE_DIARIO) {
      throw new BadRequestException(
        'Se ha excedido el límite diario de transacciones',
      );
    }
  }

  private async validarPropiedadCuenta(usuarioId: number, cuentaId: number) {
    const cuenta = await this.mysqlPrisma.cuenta.findUnique({
      where: {
        secuencial: cuentaId,
        persona: {
          secuencial: usuarioId,
        },
      },
    });

    if (!cuenta)
      throw new ForbiddenException(`Esta cuenta no pertenece al usuario`);
  }
}
