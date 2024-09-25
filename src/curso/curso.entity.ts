import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Aluno } from '../aluno/aluno.entity';
import { Professor } from '../professor/professor.entity'; // Importe a entidade Professor

@Entity()
export class Curso {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @OneToMany(() => Aluno, (aluno) => aluno.curso)
  alunos: Aluno[];

  @OneToMany(() => Professor, (professor) => professor.curso)  // Adicione essa linha
  professores: Professor[];  // Defina a propriedade professores
}
