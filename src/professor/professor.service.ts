import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './professor.entity';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
  ) {}

  create(professor: Partial<Professor>): Promise<Professor> {
    const novoProfessor = this.professorRepository.create(professor);
    return this.professorRepository.save(novoProfessor);
  }

  findAll(): Promise<Professor[]> {
    return this.professorRepository.find();
  }

  findOne(id: string): Promise<Professor | null> {
    return this.professorRepository.findOneBy({ id });
  }

  async update(id: string, updateProfessorDto: Partial<Professor>): Promise<Professor | null> {
    await this.professorRepository.update(id, updateProfessorDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.professorRepository.delete(id);
  }
}
