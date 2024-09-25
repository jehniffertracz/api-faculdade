import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Aluno } from '../aluno/aluno.entity';
import { Curso } from '../curso/curso.entity';

@Entity()
export class Matricula {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Aluno, (aluno) => aluno.id)
  aluno: Aluno;

  @ManyToOne(() => Curso, (curso) => curso.id)
  curso: Curso;

  @Column()
  data_matricula: Date;
}
