import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matricula } from './matricula.entity';

@Injectable()
export class MatriculaService {
  constructor(
    @InjectRepository(Matricula)
    private matriculaRepository: Repository<Matricula>,
  ) {}

  create(matricula: Partial<Matricula>): Promise<Matricula> {
    const novaMatricula = this.matriculaRepository.create(matricula);
    return this.matriculaRepository.save(novaMatricula);
  }

  findAll(): Promise<Matricula[]> {
    return this.matriculaRepository.find();
  }

  findOne(id: string): Promise<Matricula | null> {
    return this.matriculaRepository.findOneBy({ id });
  }

  async update(id: string, updateMatriculaDto: Partial<Matricula>): Promise<Matricula | null> {
    await this.matriculaRepository.update(id, updateMatriculaDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.matriculaRepository.delete(id);
  }
}
