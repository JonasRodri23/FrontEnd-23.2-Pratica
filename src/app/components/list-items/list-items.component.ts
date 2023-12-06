import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  items: string[] = ['Rodrigo', 'Arthur', 'Hugo', 'Dyelson', 'Jonas'];
}
