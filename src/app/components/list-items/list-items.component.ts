import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  items: { name: string; completed: boolean }[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push({ name: this.newItem, completed: false });
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  completeItem(index: number) {
    this.items[index].completed = true;
  }
}
