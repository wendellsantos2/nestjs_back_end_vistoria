/* eslint-disable prettier/prettier */
import { IsString, IsArray, IsNotEmpty, ArrayNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVistoriaDto {
  
  @ApiProperty({
    example: 'Pendente',
    description: 'Status da vistoria',
  })
  @IsString()
  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  status: string;

  @ApiProperty({
    example: 'Rua Exemplo, 123, Bairro Centro, Cidade ABC',
    description: 'Endereço onde a vistoria será realizada',
  })
  @IsString()
  @IsNotEmpty({ message: 'O endereço não pode ser vazio' })
  endereco: string;

  @ApiProperty({
    example: ['imagem1.png', 'imagem2.png'],
    description: 'Lista de URLs das imagens relacionadas à vistoria',
    isArray: true,
  })
  @IsArray()
  @ArrayNotEmpty({ message: 'É necessário enviar ao menos uma imagem' })
  imagens: string[];
}
