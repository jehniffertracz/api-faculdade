import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { Aluno } from './aluno.entity';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  create(@Body() createAlunoDto: Partial<Aluno>): Promise<Aluno> {
    return this.alunoService.create(createAlunoDto);
  }

  @Get()
  findAll(): Promise<Aluno[]> {
    return this.alunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Aluno | null> {
    return this.alunoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAlunoDto: Partial<Aluno>): Promise<Aluno | null> {
    return this.alunoService.update(id, updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.alunoService.remove(id);
  }
}
