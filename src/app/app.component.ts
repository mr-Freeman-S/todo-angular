import {Component, OnInit} from '@angular/core';
import {TodoModel} from "./models/todo-model";
import {TodoStorageService} from "./services/todo-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-angular-app';
  todoItems: TodoModel[] = []
  constructor(private todoStorage: TodoStorageService ) {
  }

  ngOnInit() {
    this.todoItems = this.todoStorage.todoItems
  }

  addTodo(titleTodo: string) {
    this.todoStorage.addTodo(titleTodo)
  }
  removeTodo(index:number) {
    this.todoStorage.removeTodo(index)
  }
}
