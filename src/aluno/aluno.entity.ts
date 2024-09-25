import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Curso } from '../curso/curso.entity';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @ManyToOne(() => Curso, (curso) => curso.alunos)
  curso: Curso;
}
