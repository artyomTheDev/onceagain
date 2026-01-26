import {Component, inject} from "@angular/core";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";

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
    userId: new FormControl(this.data.todo.userId),
    title: new FormControl(this.data.todo.title),
    completed: new FormControl(this.data.todo.completed),
  })

  submitForm() {
    console.log(this.editTodoForm)
    this.dialogRef.close(this.todoWithUpdatedFields)
  }

  get todoWithUpdatedFields() {
    return {
      ...this.editTodoForm.value,
      id: this.data.todo.id
    }
  }
}
