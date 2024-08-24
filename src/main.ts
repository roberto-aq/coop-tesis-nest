import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);

  //HABILITAR LAS CORS
  app.enableCors();

  //Agregar un prefijo para todas las rutas
  app.setGlobalPrefix('api');

  //DTOS para validar los datos que no esten
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //Agregar el process.env.PORT para facilitar la producción
  await app.listen(process.env.PORT || 8000);

  logger.log(`Server running on port ${process.env.PORT}`);
}
bootstrap();
