import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit{
  todoTitle:string = ''
  constructor() {
  }
  @Output() submit = new EventEmitter<string>()
  ngOnInit():void {
  }

  submitTodo() {
    this.submit.emit(this.todoTitle)
  }
}
