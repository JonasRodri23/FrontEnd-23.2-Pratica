import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { AreaLogadaComponent } from './components/area-logada/area-logada.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItemsComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    AreaLogadaComponent,
    ComponenteFilhoComponent,
    ComponentePaiComponent,
    FormLoginComponent,
    DadosAlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
