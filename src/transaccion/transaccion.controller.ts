import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { TransaccionService } from './transaccion.service';
import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PaginateFiltroDto } from './dto/paginate-filtro.dto';

@Auth()
@Controller('transaccion')
export class TransaccionController {
  constructor(private readonly transaccionService: TransaccionService) {}

  @ApiOperation({ summary: 'Crear una nueva transacción' })
  @ApiResponse({ status: 201, description: 'Transacción creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  @Post('nueva')
  create(@Body() createTransaccionDto: CreateTransaccionDto) {
    return this.transaccionService.crearTransaccion(createTransaccionDto);
  }

  @ApiOperation({ summary: 'Obtener una transacción por ID' })
  @ApiResponse({ status: 200, description: 'Detalles de la transacción' })
  @ApiResponse({ status: 404, description: 'Transacción no encontrada' })
  @Get(':id')
  obtenerTransaccion(
    @Param('id')
    id: string,
  ) {
    return this.transaccionService.obtenerTransaccion(+id);
  }

  @ApiOperation({ summary: 'Listar el historial de transacciones' })
  @ApiResponse({ status: 200, description: 'Lista de transacciones paginadas' })
  @Get('usuario/:usuarioId/history')
  listarTransacciones(
    @Param('usuarioId') usuarioId: string,
    @Query() filtros: PaginateFiltroDto,
  ) {
    return this.transaccionService.listarTransacciones(+usuarioId, filtros);
  }
}
