import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {

  title: string = 'ToDo List App'
  addToDo: any = []
  showTodo: boolean = false;
  listToDo: any = []

  addButton() {
    if (this.addToDo !== '') {
      this.listToDo.push(this.addToDo);
      this.addToDo = '';
      this.showTodo = true;
    }
  }

  deleteButton(index: number) {
    this.listToDo.splice(index, 1);
  }
}
