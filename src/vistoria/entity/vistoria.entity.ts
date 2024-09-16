/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vistorias') // Define a entidade e a tabela correspondente no banco de dados
export class Vistoria {
  @PrimaryGeneratedColumn()  // Gera automaticamente um ID para cada vistoria
  id: number;

  @Column()  // Define que 'status' será uma coluna no banco
  status: string;

  @Column()  // Define que 'endereco' será uma coluna no banco
  endereco: string;

  @Column("simple-array")  // Define 'imagens' como um array de strings no banco
  imagens: string[];
}
