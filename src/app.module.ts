import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoModule } from './curso/curso.module';
import { AlunoModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';
import { MatriculaModule } from './matricula/matricula.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',  // Substitua com seu nome de usuário do MySQL
      password: 'root',  // Substitua com sua senha do MySQL
      database: 'api_faculdade',  // Nome do banco de dados
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CursoModule,
    AlunoModule,
    ProfessorModule,
    MatriculaModule,
  ],
})
export class AppModule {}
