import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit{
  todoTitle:string = ''
  constructor() {
  }
  ngOnInit():void {
  }

  submitTodo(title:string) {
    this.todoTitle = title

  }
}
