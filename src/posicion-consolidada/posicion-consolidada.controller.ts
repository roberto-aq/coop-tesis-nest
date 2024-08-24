import { Controller, Get, Param } from '@nestjs/common';
import { PosicionConsolidadaService } from './posicion-consolidada.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Auth()
@ApiTags('Posición Consolidada')
@Controller('posicion-consolidada')
export class PosicionConsolidadaController {
  constructor(
    private readonly posicionConsolidadaService: PosicionConsolidadaService,
  ) {}

  @ApiOperation({ summary: 'Obtener la posición consolidada de un cliente' })
  @ApiResponse({ status: 200, description: 'Posición consolidada obtenida' })
  @Get(':usuarioId')
  async obtenerPosicionConsolidada(@Param('usuarioId') usuarioId: string) {
    return this.posicionConsolidadaService.obtenerPosicionConsolidada(
      +usuarioId,
    );
  }
}
