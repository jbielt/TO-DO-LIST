import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
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
  // private todoService: TodoService; //we do it at the constructor

  constructor(private todoService: TodoService) {
    // this.todoService = todoService;
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
  /*
  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0){
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;

  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => !todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }


  checkAllTodos(): void {
    // @ts-ignore
    const checkboxes = event.target as HTMLInputElement;
    this.todos.forEach(todo => todo.completed = checkboxes.checked);
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all'){
      return this.todos;
    }else if (this.filter === 'active'){
      return this.todos.filter(todo => !todo.completed);
    }else if (this.filter === 'completed'){
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos;
  }

   */

}

