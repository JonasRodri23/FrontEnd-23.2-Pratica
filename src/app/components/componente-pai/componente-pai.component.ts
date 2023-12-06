import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})
export class ComponentePaiComponent implements OnInit {

  dados: string[] = ['Item 1', 'Item 2', 'Item 3'];

  constructor () {}

  ngOnInit() {

  }
}
