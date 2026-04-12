import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { Todo } from "../todos-list.component";

@Component({
  selector: 'app-edit-todo-dialog',
  styleUrl: "edit-todo-dialog.component.scss",
  templateUrl: "edit-todo-dialog.component.html",
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatDialogClose
  ]
})

export class EditTodoDialogComponent{
  readonly dialogRef = inject(MatDialogRef);
  readonly data = inject(MAT_DIALOG_DATA);

  editTodoForm = new FormGroup({
    userId: new FormControl(this.data.todo.userId, {
      nonNullable: true,
    }),
    title: new FormControl(this.data.todo.title, {
      nonNullable: true,
    }),
    completed: new FormControl(this.data.todo.completed, {
      nonNullable: true,
    }),
  })

  submitForm(): void {
    console.log(this.editTodoForm)
    this.dialogRef.close(this.todoWithUpdatedFields)
  }

  get todoWithUpdatedFields(): Todo {
    return {
      ...this.editTodoForm.getRawValue(),
      id: this.data.todo.id
    }
  }
}
