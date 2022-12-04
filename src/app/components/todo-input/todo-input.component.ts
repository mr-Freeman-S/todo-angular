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
  @Output() todoTitleSubmit = new EventEmitter<string>()
  ngOnInit():void {
  }

  submitTodo() {
    this.todoTitleSubmit.emit(this.todoTitle);
    this.todoTitle = '';
  }
}
