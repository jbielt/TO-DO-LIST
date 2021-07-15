import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // Tells compiler this property will not be unassigned (!)
  @Input() todo!: Todo;
  /*
  @Output() checkedItem = new EventEmitter();
  @Output() doubleClickedItem = new EventEmitter();
  // @Output() blurredItem = new EventEmitter();
  // @Output() enteredItem = new EventEmitter();
  @Output() cancelledItem = new EventEmitter();
  @Output() deletedItem = new EventEmitter();

  // Al crear un servei no necessitem els events @Output
   */


  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  /* // no necessitem els metodes dels events tampoc.
  doneEdit(todo: Todo): void {
    this.checkedItem.emit(todo);
  }

  editTodo(todo: Todo): void {
    this.doubleClickedItem.emit(todo);
  }

  cancelEdit(todo: Todo): void {
    this.cancelledItem.emit(todo);
  }

  deleteTodo(id: number): void {
    this.deletedItem.emit(id);
  }
   */
}
