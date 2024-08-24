import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { EstadoCuenta } from 'prisma/clients/mysql-client';

export class CreateCuentaDto {
  @ApiProperty({
    description:
      'Número de identificación del usuario propietario de la cuenta',
  })
  @IsString()
  identificacion: string;

  @ApiProperty({ description: 'ID del tipo de cuenta' })
  @IsNumber()
  @IsPositive()
  tipoCuentaId: number;

  @ApiProperty({ description: 'Número único de la cuenta' })
  @IsString()
  numeroCuenta: string;

  @ApiProperty({ description: 'Saldo inicial de la cuenta' })
  @IsNumber()
  @IsPositive()
  saldo: number;

  @ApiProperty({
    enum: EstadoCuenta,
    description: 'Estado actual de la cuenta - [ACTIVA - INACTIVA - BLOQUEADA]',
  })
  @IsOptional()
  @IsEnum(EstadoCuenta)
  estado: EstadoCuenta;
}
