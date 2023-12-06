import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  autenticado: boolean = false;
  email: string = '';

  fazerLogin(event: { email: string, senha: string }) {
    // Lógica de autenticação (pode ser uma chamada a um serviço, etc.)
    // Por simplicidade, vamos considerar que o login é bem-sucedido sempre.
    this.autenticado = true;
    this.email = event.email;
  }
}