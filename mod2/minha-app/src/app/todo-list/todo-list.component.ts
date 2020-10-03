import { Component } from '@angular/core';
import { TodoItem } from './todoitem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTask: string = '';

  tasks: TodoItem[] = [
    { description: 'Arrumar a cama', done: true },
    { description: 'Fazer trabalho bootcamp', done: false },
  ];

  addTask() {
    this.tasks.push({
      description: this.newTask,
      done: false,
    });
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
