import {Component} from '@angular/core';
import {TodoModel} from "./models/todo-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular-app';
  todoItems: TodoModel[] = [
    {title: 'angular introducing'},
    {title: 'interface introducing'},
  ];

  constructor() {
  }

  addTodo(titleTodo: string) {

  }

}
