import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitando CORS para todas as origens (para desenvolvimento)
  app.enableCors({
    origin: 'http://localhost:3000', // Origem permitida (Frontend)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Se necessário para incluir cookies
  });

  const config = new DocumentBuilder()
    .setTitle('API de Autenticação')
    .setDescription('API para login e autenticação usando JWT')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8000);
}
bootstrap();
