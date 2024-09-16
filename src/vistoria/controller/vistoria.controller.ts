/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { CreateVistoriaDto } from '../dto/create-vistoria.dto';
import { VistoriaService } from '../service/vistoria.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('vistorias') // Tag usada para agrupar os endpoints no Swagger
@Controller('vistorias')
export class VistoriaController {
  constructor(private readonly vistoriaService: VistoriaService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova vistoria' }) // Descrição do endpoint
  @ApiResponse({ status: 201, description: 'Vistoria criada com sucesso.' }) // Resposta de sucesso
  @ApiResponse({ status: 400, description: 'Dados inválidos.' }) // Possível resposta de erro
  create(@Body() createVistoriaDto: CreateVistoriaDto) {
    return this.vistoriaService.create(createVistoriaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as vistorias' }) // Descrição do endpoint
  @ApiResponse({ status: 200, description: 'Lista de vistorias retornada com sucesso.' })
  findAll() {
    return this.vistoriaService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma vistoria pelo ID' }) // Descrição do endpoint
  @ApiParam({ name: 'id', description: 'ID da vistoria' }) // Param do Swagger
  @ApiResponse({ status: 200, description: 'Vistoria removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Vistoria não encontrada.' }) // Possível resposta de erro
  remove(@Param('id') id: number) {
    return this.vistoriaService.remove(id);
  }
}
