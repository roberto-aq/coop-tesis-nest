import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { MySqlPrismaService } from 'src/prisma-db/mysql-prisma.service';

@Injectable()
export class CuentasService {
  constructor(private readonly mysqlPrisma: MySqlPrismaService) {}

  async create(createCuentaDto: CreateCuentaDto) {
    try {
      return this.mysqlPrisma.$transaction(async (prisma) => {
        // Verificar si ya existe una cuenta con el mismo número
        const cuentaExistente = await prisma.cuenta.findUnique({
          where: { numeroCuenta: createCuentaDto.numeroCuenta },
        });

        if (cuentaExistente) {
          throw new ConflictException(
            `Ya existe una cuenta con el número ${createCuentaDto.numeroCuenta}`,
          );
        }

        // verificamos si la persona existe
        const persona = await this.mysqlPrisma.persona.findUnique({
          where: { identificacion: createCuentaDto.identificacion },
        });

        if (!persona) {
          throw new NotFoundException(
            `No se encontró una persona con la identificación ${createCuentaDto.identificacion}`,
          );
        }

        // Verificamos si el tipo de cuenta existe
        const tipoCuenta = await this.mysqlPrisma.tipoCuenta.findUnique({
          where: { secuencial: createCuentaDto.tipoCuentaId },
        });

        if (!tipoCuenta) {
          throw new NotFoundException(
            `No se encontró un tipo de cuenta con el ID ${createCuentaDto.tipoCuentaId}`,
          );
        }

        // Crear la nueva cuenta
        const nuevaCuenta = await this.mysqlPrisma.cuenta.create({
          data: {
            numeroCuenta: createCuentaDto.numeroCuenta,
            saldo: createCuentaDto.saldo,
            estado: createCuentaDto.estado,
            persona: {
              connect: { identificacion: createCuentaDto.identificacion },
            },
            TipoCuenta: {
              connect: { secuencial: createCuentaDto.tipoCuentaId },
            },
          },
        });

        return nuevaCuenta;
      });
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async getAccountsByUser(identificacion: string) {
    try {
      const user = await this.mysqlPrisma.persona.findUnique({
        where: { identificacion: identificacion },
      });

      if (!user)
        throw new NotFoundException(
          `Usuario con la identifiacion ${identificacion} no fue encontrado`,
        );

      return this.mysqlPrisma.cuenta.findMany({
        where: { personaSecuencial: user.secuencial },
      });
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async getAccountById(id: number) {
    try {
      const cuenta = await this.mysqlPrisma.cuenta.findUnique({
        where: { secuencial: id },
      });

      if (!cuenta)
        throw new NotFoundException(`Cuenta con ID ${id} no fue encontrada`);

      return cuenta;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async update(id: number, updateCuentaDto: UpdateCuentaDto) {
    try {
      await this.getAccountById(id);

      const cuentaActualizada = await this.mysqlPrisma.cuenta.update({
        where: { secuencial: id },
        data: {
          saldo: updateCuentaDto.saldo,
          estado: updateCuentaDto.estado,
          tipoCuentaSecuencial: updateCuentaDto.tipoCuentaId,
        },
      });

      return cuentaActualizada;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async remove(id: number) {
    try {
      await this.getAccountById(id);

      return this.mysqlPrisma.cuenta.delete({ where: { secuencial: id } });
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async getAccountBalance(id: number) {
    try {
      const cuenta = await this.getAccountById(id);
      return { balance: cuenta.saldo };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

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
}
