import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Auth()
@ApiTags('Cuentas')
@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  @ApiOperation({ summary: 'Crear una nueva cuenta' })
  @ApiResponse({ status: 201, description: 'Cuenta creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  @ApiResponse({
    status: 409,
    description: 'Ya existe una cuenta con este número',
  })
  @Post('/nuevo')
  create(@Body() createCuentaDto: CreateCuentaDto) {
    return this.cuentasService.create(createCuentaDto);
  }

  @ApiOperation({ summary: 'Obtener todas las cuentas de un usuario' })
  @ApiResponse({ status: 200, description: 'Lista de cuentas del usuario' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  @Get('/usuario/:identificacion')
  getAccountsByUser(@Param('identificacion') identificacion: string) {
    return this.cuentasService.getAccountsByUser(identificacion);
  }

  @ApiOperation({ summary: 'Obtener una cuenta por ID' })
  @ApiResponse({ status: 200, description: 'Cuenta encontrada' })
  @ApiResponse({ status: 404, description: 'Cuenta no encontrada' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentasService.getAccountById(+id);
  }

  @ApiOperation({ summary: 'Actualizar una cuenta' })
  @ApiResponse({ status: 200, description: 'Cuenta actualizada exitosamente' })
  @ApiResponse({ status: 404, description: 'Cuenta no encontrada' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuentaDto: UpdateCuentaDto) {
    return this.cuentasService.update(+id, updateCuentaDto);
  }

  @ApiOperation({ summary: 'Eliminar una cuenta' })
  @ApiResponse({ status: 200, description: 'Cuenta eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Cuenta no encontrada' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuentasService.remove(+id);
  }

  @Get(':id/balance')
  @ApiOperation({ summary: 'Obtener el saldo de una cuenta' })
  @ApiResponse({ status: 200, description: 'Saldo de la cuenta' })
  @ApiResponse({ status: 404, description: 'Cuenta no encontrada' })
  async getAccountBalance(@Param('id', ParseIntPipe) id: number) {
    return this.cuentasService.getAccountBalance(id);
  }
}
