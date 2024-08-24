import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma-db/prisma.module';
import { TransaccionModule } from './transaccion/transaccion.module';
import { CuentasModule } from './cuentas/cuentas.module';
import { ProductosModule } from './productos/productos.module';
import { PosicionConsolidadaModule } from './posicion-consolidada/posicion-consolidada.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PrismaModule,
    TransaccionModule,
    CuentasModule,
    ProductosModule,
    PosicionConsolidadaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
