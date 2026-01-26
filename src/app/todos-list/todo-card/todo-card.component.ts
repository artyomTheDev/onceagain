import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditTodoDialogComponent} from "../edit-todo-dialog/edit-todo-dialog.component";
import {Todo} from "../todos-list.component";
import {SliceTextPipe} from "../../pipes/slice-text.pipe";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    SliceTextPipe
  ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})

export class TodoCardComponent {
  readonly dialog = inject(MatDialog);

  @Input()
  todo: any;

  @Output()
  deleteTodo = new EventEmitter<number>();

  @Output()
  editTodo = new EventEmitter<any>();

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }

  onEditTodo() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe(editedResult => {
      if (editedResult) {
        this.editTodo.emit(editedResult)
      }
    });
  }
}
