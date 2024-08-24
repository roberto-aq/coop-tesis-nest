import { Module } from '@nestjs/common';
import { MySqlPrismaService } from './mysql-prisma.service';
import { PostgresPrismaService } from './postgres-prisma.service';

@Module({
  providers: [MySqlPrismaService, PostgresPrismaService],
  exports: [MySqlPrismaService, PostgresPrismaService],
})
export class PrismaModule {}
