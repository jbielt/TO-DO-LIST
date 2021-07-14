import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)'}),
        animate(1000, style({opacity: 1, transform: 'translateY(0px)'}))
      ]),
      transition(':enter', [
        animate(1000, style({opacity: 1, transform: 'translateY(30px)'}))
      ])
    ])

  ]
})
export class TodoListComponent implements OnInit {
  todoTitle = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoTitle = '';
  }


  addTodo(): void {
    if (this.todoTitle.trim().length === 0){
      return;
    }
    this.todoService.addTodo(this.todoTitle);
    this.todoTitle = '';
  }
}

