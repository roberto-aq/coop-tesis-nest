import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { MySqlPrismaService } from 'src/prisma-db/mysql-prisma.service';

@Injectable()
export class PosicionConsolidadaService {
  constructor(private readonly mysqlPrisma: MySqlPrismaService) {}

  async obtenerPosicionConsolidada(usuarioId: number) {
    try {
      const usuario = await this.mysqlPrisma.persona.findUnique({
        where: {
          secuencial: usuarioId,
        },
        include: {
          Cuenta: {
            include: {
              TipoCuenta: true,
            },
          },
        },
      });

      if (!usuario) {
        throw new NotFoundException(
          `Usuario con ID ${usuarioId} no encontrado`,
        );
      }

      const cuentasResumen = usuario.Cuenta.map((cuenta) => ({
        id: cuenta.secuencial,
        numeroCuenta: cuenta.numeroCuenta,
        tipoCuenta: cuenta.TipoCuenta.nombre,
        saldo: cuenta.saldo,
        estado: cuenta.estado,
      }));

      const saldoTotal = cuentasResumen.reduce((total, cuenta) => {
        return total + cuenta.saldo;
      }, 0);

      return {
        usuarioId: usuario.secuencial,
        nombreCompleto: usuario.nombreUnido,
        cuentas: cuentasResumen,
        saldoTotal,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Error al obtener la posición consolidada, revisar los logs',
      );
    }
  }
}
