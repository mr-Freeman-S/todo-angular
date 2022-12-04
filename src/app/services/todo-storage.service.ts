import { Injectable } from '@angular/core';
import {TodoModel} from "../models/todo-model";

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todoItems: TodoModel[] = [
    {title: 'angular introducing'},
    {title: 'interface introducing'},
  ];
  constructor() {}

  addTodo(titleTodo: string) {
    this.todoItems.push({title: titleTodo});
  }

  removeTodo(indexTodo:number){
    this.todoItems.splice(indexTodo,1)
  }
}
