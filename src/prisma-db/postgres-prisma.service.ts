import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from 'prisma/clients/postgres-client';

@Injectable()
export class PostgresPrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger('Database Postgres');

  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL_POSTGRESQL,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database PG Connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
