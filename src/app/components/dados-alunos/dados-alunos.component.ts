import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrl: './dados-alunos.component.css'
})
export class DadosAlunosComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe((data) => {
      this.alunos = data;
    });
  }

  calcularMedia(notas: any): number {
    const disciplinas = Object.keys(notas);
    const totalNotas = disciplinas.reduce((acc, disciplina) => acc + notas[disciplina], 0);
    return totalNotas / disciplinas.length;
  }
}
