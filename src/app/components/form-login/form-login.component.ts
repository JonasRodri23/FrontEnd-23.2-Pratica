import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  @Output() login = new EventEmitter<{ email: string, senha: string }>();
  email: string = '';
  senha: string = '';
  mensagem: string = '';

  fazerLogin() {
    if (this.email && this.senha) {
    this.login.emit({ email: this.email, senha: this.senha });
    } else{
      this.mensagem = 'Olá, informe os campos corretamente.';
    }
  }
}