/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VistoriaController } from './controller/vistoria.controller';
import { VistoriaService } from './service/vistoria.service';
import { VistoriaRepository } from './repository/vistoria.repository';
import { Vistoria } from './entity/vistoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vistoria])], // Caso necessário, adicione as entidades ORM
  controllers: [VistoriaController],
  providers: [VistoriaService, VistoriaRepository],
})
export class VistoriaModule {}
