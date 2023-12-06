import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-acesso',
  templateUrl: './controle-acesso.component.html',
  styleUrl: './controle-acesso.component.css'
})
export class ControleAcessoComponent {
  tipoUsuario: string = '';
  permissao: string = '';

  selecionarTipoUsuario(tipo: string) {
    this.tipoUsuario = tipo;

    switch (tipo) {
      case 'administrador':
        this.permissao = 'Você tem permissão de administrador';
        break;
      case 'colaborador':
        this.permissao = 'Você tem permissão de colaborador';
        break;
      case 'usuario':
        this.permissao = 'Você tem permissão de usuário';
        break;
      default:
        this.permissao = '';
    }
  }

}
