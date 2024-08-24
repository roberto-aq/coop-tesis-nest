import { Module } from '@nestjs/common';
import { TransaccionService } from './transaccion.service';
import { TransaccionController } from './transaccion.controller';
import { PrismaModule } from 'src/prisma-db/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TransaccionController],
  providers: [TransaccionService],
  imports: [AuthModule, PrismaModule],
})
export class TransaccionModule {}
