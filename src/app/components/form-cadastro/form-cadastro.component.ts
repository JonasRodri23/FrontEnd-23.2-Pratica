import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  mensagem: string = '';

  cadastrar() {
    if (this.nome && this.email && this.senha) {
      this.mensagem = `Olá, ${this.nome}, seu cadastro foi realizado com sucesso.`;
    } else {
      this.mensagem = 'Olá, informe os campos corretamente.';
    }
  }
}
