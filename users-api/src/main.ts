import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ValidationPipe global pour gérer les erreurs 400
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      errorHttpStatusCode: 400,
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Users Management API')
    .setDescription('Documentation Swagger pour la gestion des utilisateurs')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('🚀 Server running: http://localhost:3000');
  console.log('📘 Swagger: http://localhost:3000/api');
}

bootstrap().catch((err) => {
  console.error('❌ Error while starting app:', err);
});
