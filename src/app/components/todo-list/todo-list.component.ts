import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
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

  todos: Todo[] = [];
  todoTitle: string = '';
  idForTodo: number = 0;
  beforeEditCache: string = '';
  filter: string = '';

  constructor() { 
  }

  ngOnInit(): void {
    this.filter = 'all';
    this.beforeEditCache = '';
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        'id': 1,
        'title': 'Finish my homework',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'Wash the dishes',
        'completed': false,
        'editing': false
      },
      {
        'id': 3,
        'title': 'Clean the living room',
        'completed': false,
        'editing': false
      },
    ];
  }

  addTodo(): void {
    if(this.todoTitle.trim().length === 0){
      return;
    }
    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false
    })

    this.todoTitle = '';
    this.idForTodo++;
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if(todo.title.trim().length === 0){
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
    this.todos.forEach(todo => todo.completed = 
      (<HTMLInputElement>event.target).checked);
  }

  todosFiltered(): Todo[] {
    if(this.filter === 'all'){
      return this.todos;
    }else if(this.filter === 'active'){
      return this.todos.filter(todo => !todo.completed);
    }else if(this.filter === 'completed'){
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos;
  }
  
}

