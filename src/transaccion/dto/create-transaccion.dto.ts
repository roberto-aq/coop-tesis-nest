import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { EstadoTransaccion } from 'prisma/clients/mysql-client';

export class CreateTransaccionDto {
  @ApiProperty({ description: 'ID del usuario que realiza la transacción' })
  @IsNumber()
  usuarioId: number;

  @ApiProperty({ description: 'Monto de la transacción' })
  @IsNumber()
  monto: number;

  @ApiProperty({
    description: 'ID de la cuenta de origen (opcional para depósitos)',
  })
  @IsOptional()
  @IsNumber()
  cuentaOrigenId?: number;

  @ApiProperty({
    description: 'ID de la cuenta de destino (opcional para retiros)',
  })
  @IsOptional()
  @IsNumber()
  cuentaDestinoId?: number;

  @ApiProperty({ description: 'ID del tipo de transacción' })
  @IsNumber()
  tipoTransaccionId: number;

  @ApiProperty({ description: 'Descripción de la transacción' })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiProperty({
    enum: EstadoTransaccion,
    description: 'Estado de la transacción',
  })
  @IsOptional()
  @IsEnum(EstadoTransaccion)
  estado: EstadoTransaccion;
}
