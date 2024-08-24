import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { MySqlPrismaService } from 'src/prisma-db/mysql-prisma.service';
import { LoginDto } from './dto/login.dto';
import { PostgresPrismaService } from 'src/prisma-db/postgres-prisma.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-patload.interface';
import { RegisterDto } from './dto/register.dto';
import { crearNombreUsuario } from './helpers';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly mysqlPrisma: MySqlPrismaService,
    private readonly postgresPrisma: PostgresPrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async verificarCedula(cedula: string) {
    const user = await this.mysqlPrisma.persona.findUnique({
      where: {
        identificacion: cedula,
      },
    });

    if (!user)
      throw new BadRequestException(
        `No se encontro el usuario con la cedula ${cedula}`,
      );

    return {
      ok: true,
      data: user,
    };
  }

  async login(loginDto: LoginDto) {
    try {
      // Buscar el usuario en la base de datos de Postgres
      const user = await this.postgresPrisma.persona.findUnique({
        where: {
          correo: loginDto.email,
        },
        include: {
          clave: {
            where: { estado: true },
            orderBy: { fecha: 'desc' },
            take: 1,
          },
          personaRol: {
            include: {
              rol: true,
            },
          },
        },
      });

      if (!user) throw new BadRequestException('Usuario no encontrado');

      // Verificar si hay una clave activa
      if (user.clave.length === 0)
        throw new BadRequestException('Usuario no tiene clave activa');

      const { idPersona, clave } = user;

      // * Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
      const passwordMatch = bcrypt.compareSync(
        loginDto.password,
        clave[0].clave,
      );

      if (!passwordMatch)
        throw new UnauthorizedException('Credenciales  Incorrectas');

      return {
        ok: true,
        data: {
          email: user.correo,
          nombre: user.nombreUnido,
          token: this.getJwtToken({ id: Number(idPersona) }),
        },
      };

      // Comparar la contraseña
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  // * Registro
  async register(registerDto: RegisterDto) {
    const { identificacion, email } = registerDto;

    try {
      // Verificar si la cedula si existe y no fue manipulada
      await this.verificarCedula(identificacion);

      // Verificar si el correo ya esta registrado
      const user = await this.postgresPrisma.persona.findUnique({
        where: {
          correo: email,
        },
      });

      if (user)
        throw new BadRequestException('El correo ya se encuentra registrado');

      // Encriptar la contraseña
      const hashedPassword = bcrypt.hashSync(registerDto.password, 10);

      // Generar el nombre de usuario
      const usuarioGenerado = crearNombreUsuario(identificacion);

      // Insertar los datos en la tabla Persona
      const result = await this.postgresPrisma.$transaction(async (prisma) => {
        const nuevoUsuario = await prisma.persona.create({
          data: {
            tipoIdentificacion: registerDto.tipoIdentificacion,
            identificacion,
            nombreUnido: registerDto.nombreUnido,
            apellido1: registerDto.apellido1,
            apellido2: registerDto.apellido2,
            nombres: registerDto.nombres,
            fechaNacimiento: registerDto.fechaNacimiento,
            direccion: registerDto.direccion,
            direccionTrabajo: registerDto.direccionTrabajo,
            telefono: registerDto.telefono,
            sueldo: registerDto.sueldo,
            correo: email,
            usuario: usuarioGenerado,
          },
          select: {
            idPersona: true,
          },
        });

        const { idPersona } = nuevoUsuario;

        // Obtener el valor máximo de idClave
        const maxIdClaveResult = await prisma.clave.aggregate({
          _max: {
            idClave: true,
          },
        });
        const maxIdClave = maxIdClaveResult._max.idClave;
        const nuevaIdClave = (maxIdClave !== null ? Number(maxIdClave) : 0) + 1;

        // Insertar la clave en la tabla Clave
        await prisma.clave.create({
          data: {
            idClave: nuevaIdClave,
            idPersona: idPersona,
            clave: hashedPassword,
            estado: true,
            fecha: new Date(),
          },
        });

        // Obtener el valor máximo de idpersonal_rol
        const maxIdPersonaRolResult = await prisma.personaRol.aggregate({
          _max: { idPersonaRol: true },
        });
        const maxIdPersonaRol = maxIdPersonaRolResult._max.idPersonaRol;
        const newIdPersonaRol =
          (maxIdPersonaRol !== null ? Number(maxIdPersonaRol) : 0) + 1;

        // Insertar el rol de "afiliado" en la tabla `tbl_persona_rol`
        await prisma.personaRol.create({
          data: {
            idPersonaRol: newIdPersonaRol,
            idPersona: idPersona,
            idRol: 1, // 1 es el id_rol para "afiliado"
            fecha: new Date(),
            estado: true,
          },
        });

        return nuevoUsuario;
      });

      return {
        success: true,
        message: 'Registro completado con éxito.',
        data: {
          token: this.getJwtToken({ id: Number(result.idPersona) }),
        },
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async updatePassword(
    usuarioId: number,
    updatePasswordDto: UpdatePasswordDto,
  ) {
    try {
      const usuario = await this.postgresPrisma.persona.findUnique({
        where: { idPersona: usuarioId },
        include: {
          clave: {
            where: { estado: true },
            orderBy: { fecha: 'desc' },
            take: 1,
          },
        },
      });

      if (!usuario) throw new NotFoundException('Usuario no encontrado');

      if (usuario.clave.length === 0) {
        throw new BadRequestException('Usuario no tiene clave activa');
      }

      const isPasswordValid = bcrypt.compareSync(
        updatePasswordDto.currentPassword,
        usuario.clave[0].clave,
      );

      if (!isPasswordValid) {
        throw new BadRequestException('Contraseña actual incorrecta');
      }

      const hashedPassword = bcrypt.hashSync(updatePasswordDto.newPassword, 10);

      await this.postgresPrisma.$transaction(async (prisma) => {
        // Desactivar la clave actual
        await prisma.clave.updateMany({
          where: {
            idPersona: usuarioId,
            estado: true,
          },
          data: {
            estado: false,
          },
        });

        // Obtener el valor máximo de idClave
        const maxIdClaveResult = await prisma.clave.aggregate({
          _max: { idClave: true },
        });
        const maxIdClave = maxIdClaveResult._max.idClave;
        const nuevaIdClave = (maxIdClave !== null ? Number(maxIdClave) : 0) + 1;

        // Crear una nueva entrada de clave
        await prisma.clave.create({
          data: {
            idClave: nuevaIdClave,
            idPersona: usuarioId,
            clave: hashedPassword,
            estado: true,
            fecha: new Date(),
          },
        });
      });
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  // * Obtener token JWT
  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);

    return token;
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    if (error.status === 404)
      throw new NotFoundException(error.response.message);
    if (error.status === 400)
      throw new BadRequestException(error.response.message);
    if (error.status === 401)
      throw new UnauthorizedException(error.response.message);

    console.log(error);

    throw new InternalServerErrorException('Algo salió mal, Revisa los logs');
  }
}
