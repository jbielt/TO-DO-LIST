import { Injectable } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;
  filter: string;
  anyRemainingModel: boolean;
  todos: Todo[];


  constructor() {
    this.todoTitle = '';
    this.idForTodo = 4;
    this.beforeEditCache = '';
    this.filter = 'all';
    this.anyRemainingModel = true;
    this.todos = [
      {
        id: 1,
        title: 'Finish my homework',
        completed: false,
        editing: false
      },
      {
        id: 2,
        title: 'Wash the dishes',
        completed: false,
        editing: false
      },
      {
        id: 3,
        title: 'Clean the living room',
        completed: false,
        editing: false
      },
    ];
  }

  addTodo(todoTitle: string): void {
    if (todoTitle.trim().length === 0){
      return;
    }
    this.todos.push({
      id: this.idForTodo,
      title: todoTitle,
      completed: false,
      editing: false
    });
    this.idForTodo++;
  }

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
}
