import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(new ValidationPipe({ transform: true }))
  await app.listen(3003, () => { console.log("Live Academy rodando em http://localhost:3003/")});
}
bootstrap();
