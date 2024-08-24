import { Module } from '@nestjs/common';
import { PosicionConsolidadaService } from './posicion-consolidada.service';
import { PosicionConsolidadaController } from './posicion-consolidada.controller';
import { PrismaModule } from 'src/prisma-db/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PosicionConsolidadaController],
  providers: [PosicionConsolidadaService],
  imports: [AuthModule, PrismaModule],
})
export class PosicionConsolidadaModule {}
