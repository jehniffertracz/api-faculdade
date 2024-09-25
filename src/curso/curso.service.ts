import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ) {}

  create(curso: Partial<Curso>): Promise<Curso> {
    const novoCurso = this.cursoRepository.create(curso);
    return this.cursoRepository.save(novoCurso);
  }

  findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }

  findOne(id: string): Promise<Curso | null> {
    return this.cursoRepository.findOneBy({ id });
  }

  async update(id: string, updateCursoDto: Partial<Curso>): Promise<Curso | null> {
    await this.cursoRepository.update(id, updateCursoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cursoRepository.delete(id);
  }
}
