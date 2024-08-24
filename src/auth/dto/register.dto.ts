import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsDateString,
  IsDecimal,
  IsInt,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    description:
      'Tipo de identificación del usuario (por ejemplo, 0 para cédula)',
    example: '0',
  })
  @IsInt()
  tipoIdentificacion: number;

  @ApiProperty({
    description: 'Número de identificación del usuario (cédula o RUC)',
    example: '1307838878',
  })
  @IsString()
  @MinLength(10)
  identificacion: string;

  @ApiProperty({
    description: 'Nombre completo del usuario en un solo campo',
    example: 'ZAMBRANO RIVERA BREESKIN PASKALINE',
  })
  @IsString()
  @MinLength(3)
  nombreUnido: string;

  @ApiProperty({
    description: 'Primer apellido del usuario (opcional)',
    example: 'ZAMBRANO',
    required: false,
  })
  @IsOptional()
  @IsString()
  apellido1?: string;

  @ApiProperty({
    description: 'Segundo apellido del usuario (opcional)',
    example: 'RIVERA',
    required: false,
  })
  @IsOptional()
  @IsString()
  apellido2?: string;

  @ApiProperty({
    description: 'Nombres del usuario (opcional)',
    example: 'BREESKIN PASKALINE',
    required: false,
  })
  @IsOptional()
  @IsString()
  nombres?: string;

  @ApiProperty({
    description: 'Fecha de nacimiento del usuario (opcional)',
    example: '1995-06-15',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  fechaNacimiento?: Date;

  @ApiProperty({
    description: 'Dirección de residencia del usuario (opcional)',
    example: 'URB. CIUDAD CASCADA, SN',
    required: false,
  })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty({
    description: 'Dirección de trabajo del usuario (opcional)',
    example: 'AV. PRINCIPAL 123',
    required: false,
  })
  @IsOptional()
  @IsString()
  direccionTrabajo?: string;

  @ApiProperty({
    description: 'Número de teléfono del usuario (opcional)',
    example: '0998765432',
    required: false,
  })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty({
    description: 'Sueldo del usuario (opcional)',
    example: '1500.00',
    required: false,
  })
  @IsOptional()
  @IsDecimal({ decimal_digits: '2', force_decimal: false })
  sueldo?: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'breeskinzambrano@hotmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'securePassword123',
  })
  @IsString()
  @MinLength(6)
  password: string;
}
