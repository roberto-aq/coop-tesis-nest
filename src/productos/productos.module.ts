import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { PrismaModule } from 'src/prisma-db/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports: [AuthModule, PrismaModule],
})
export class ProductosModule {}
