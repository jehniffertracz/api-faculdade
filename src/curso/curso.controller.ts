import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CursoService } from './curso.service';
import { Curso } from './curso.entity';

@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  create(@Body() createCursoDto: Partial<Curso>): Promise<Curso> {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  findAll(): Promise<Curso[]> {
    return this.cursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Curso | null> {
    return this.cursoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCursoDto: Partial<Curso>): Promise<Curso | null> {
    return this.cursoService.update(id, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cursoService.remove(id);
  }
}
