import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { Professor } from './professor.entity';

@Controller('professores')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  create(@Body() createProfessorDto: Partial<Professor>): Promise<Professor> {
    return this.professorService.create(createProfessorDto);
  }

  @Get()
  findAll(): Promise<Professor[]> {
    return this.professorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Professor | null> {
    return this.professorService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfessorDto: Partial<Professor>): Promise<Professor | null> {
    return this.professorService.update(id, updateProfessorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.professorService.remove(id);
  }
}
