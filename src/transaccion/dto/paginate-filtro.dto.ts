import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsEnum, IsNumber, IsDate } from 'class-validator';

export class PaginateFiltroDto {
  @ApiProperty({ required: false, description: 'ID de la cuenta' })
  @IsOptional()
  @IsNumber()
  cuentaId?: number;

  @ApiProperty({ required: false, description: 'Fecha de inicio para filtrar' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  fechaInicio?: Date;

  @ApiProperty({ required: false, description: 'Fecha de fin para filtrar' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  fechaFin?: Date;

  @ApiProperty({ required: false, description: 'Tipo de transacción' })
  @IsOptional()
  @IsNumber()
  tipoTransaccionId?: number;

  @ApiProperty({ required: false, description: 'Estado de la transacción' })
  @IsOptional()
  @IsEnum(['COMPLETADA', 'PENDIENTE', 'FALLIDA'])
  estado?: 'COMPLETADA' | 'PENDIENTE' | 'FALLIDA';

  @ApiProperty({ required: false, description: 'Número de página', default: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pagina?: number = 1;

  @ApiProperty({
    required: false,
    description: 'Elementos por página',
    default: 10,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  elementosPorPagina?: number = 10;
}
