/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VistoriaModule } from './vistoria/vistoria.module';
import { AuthModule } from './auth/auth.module';
 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'autenticacao',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,VistoriaModule
  ],
})
export class AppModule {}
