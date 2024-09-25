import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private alunoRepository: Repository<Aluno>,
  ) {}

  create(aluno: Partial<Aluno>): Promise<Aluno> {
    const novoAluno = this.alunoRepository.create(aluno);
    return this.alunoRepository.save(novoAluno);
  }

  findAll(): Promise<Aluno[]> {
    return this.alunoRepository.find();
  }

  findOne(id: string): Promise<Aluno | null> {
    return this.alunoRepository.findOneBy({ id });
  }

  async update(id: string, updateAlunoDto: Partial<Aluno>): Promise<Aluno | null> {
    await this.alunoRepository.update(id, updateAlunoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.alunoRepository.delete(id);
  }
}
