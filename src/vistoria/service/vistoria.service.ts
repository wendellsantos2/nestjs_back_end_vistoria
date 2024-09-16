/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vistoria } from '../entity/vistoria.entity';
import { CreateVistoriaDto } from '../dto/create-vistoria.dto';

@Injectable()
export class VistoriaService {
  constructor(
    @InjectRepository(Vistoria)  // Injetando o repositório TypeORM diretamente
    private readonly vistoriaRepository: Repository<Vistoria>,  // Repositório TypeORM
  ) {}

  async create(createVistoriaDto: CreateVistoriaDto): Promise<Vistoria> {
    // Criando a entidade Vistoria a partir do DTO
    const novaVistoria = this.vistoriaRepository.create({
      status: createVistoriaDto.status,
      endereco: createVistoriaDto.endereco,
      imagens: createVistoriaDto.imagens,
    });

    // Salvando no banco de dados
    return await this.vistoriaRepository.save(novaVistoria);
  }

  async findAll(): Promise<Vistoria[]> {
    return await this.vistoriaRepository.find();
  }

 

  async remove(id: number): Promise<void> {
    await this.vistoriaRepository.delete(id);
  }
}
