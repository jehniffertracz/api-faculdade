import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { Matricula } from './matricula.entity';

@Controller('matriculas')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  create(@Body() createMatriculaDto: Partial<Matricula>): Promise<Matricula> {
    return this.matriculaService.create(createMatriculaDto);
  }

  @Get()
  findAll(): Promise<Matricula[]> {
    return this.matriculaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Matricula | null> {
    return this.matriculaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMatriculaDto: Partial<Matricula>): Promise<Matricula | null> {
    return this.matriculaService.update(id, updateMatriculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.matriculaService.remove(id);
  }
}
