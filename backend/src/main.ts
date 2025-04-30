import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as crypto from 'crypto';
import { ValidationPipe } from '@nestjs/common';

// (global as any).crypto = crypto;
console.log(crypto.randomUUID());

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT_BACK!);
}
bootstrap();
