import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrl: './area-logada.component.css'
})
export class AreaLogadaComponent {
  @Input() email: string = '';
  @Input() autenticado: boolean = false;
}