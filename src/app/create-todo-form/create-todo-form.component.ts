import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInput,
    MatLabel,
    MatSelect,
    MatFormField,
    MatOption,
  ],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})
export class CreateTodoFormComponent {
@Output()
  public createTodo = new EventEmitter<any>();

  public todoForm = new FormGroup({
    userId: new FormControl(),
    title: new FormControl(),
    completed: new FormControl(),
  })

  submitForm() {
this.createTodo.emit(this.todoForm.value)
    this.todoForm.reset()
  }
}
