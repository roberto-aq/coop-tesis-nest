import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from 'prisma/clients/mysql-client';

@Injectable()
export class MySqlPrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger('Database MYSQL');

  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL_MYSQL,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database MYSQL Connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
