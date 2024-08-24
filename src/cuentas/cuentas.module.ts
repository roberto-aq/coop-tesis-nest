import { Module } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CuentasController } from './cuentas.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma-db/prisma.module';

@Module({
  controllers: [CuentasController],
  providers: [CuentasService],
  imports: [AuthModule, PrismaModule],
})
export class CuentasModule {}
