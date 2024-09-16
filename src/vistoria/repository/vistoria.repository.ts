/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Vistoria } from '../entity/vistoria.entity';

@Injectable()
export class VistoriaRepository {
  private vistorias: Vistoria[] = [];

  save(vistoria: Vistoria): Vistoria {
    this.vistorias.push(vistoria);
    return vistoria;
  }

  findAll(): Vistoria[] {
    return this.vistorias;
  }

  findOne(id: number): Vistoria {
    return this.vistorias[id];
  }

  remove(id: number): void {
    this.vistorias.splice(id, 1);
  }
}
