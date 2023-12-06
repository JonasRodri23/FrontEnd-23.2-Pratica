import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  templateUrl: './contador-component.component.html',
  styleUrl: './contador-component.component.css'
})
export class ContadorComponentComponent implements OnInit {
  valor: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  aumentar() {
    this.valor++;
  }

  diminuir() {
    if (this.valor > 0) {
      this.valor--;
    }
  }

}
