import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {TodosApiService} from "./todos-api.service";
import {TodoCardComponent} from "./todo-card/todo-card.component";
import {TodosService} from "./todos.service";
import {CreateTodoFormComponent} from "../create-todo-form/create-todo-form.component";

export interface Todo {
  userId: number,
  id?: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    NgForOf,
    TodoCardComponent,
    AsyncPipe,
    CreateTodoFormComponent,
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})

export class TodosListComponent {
  readonly TodosApiService = inject(TodosApiService);
  readonly TodosService = inject(TodosService);

  constructor() {

    this.TodosApiService.getTodos().subscribe(
      (response: any) => {
        this.TodosService.setTodos(response)
      }
    )
  }

  public deleteTodo(todoIdToDelete: number):void {
    this.TodosService.deleteTodo(todoIdToDelete)
  }

  public createTodo(formData: any) {
    console.log(this.TodosService.todos$)
    this.TodosService.createTodo({
      userId: formData.userId,
      id: new Date().getTime(),
      title: formData.title,
      completed: formData.completed,
    })
  }
  public editTodo(editedTodoData : any) {
    console.log(editedTodoData)
    this.TodosService.editTodo(editedTodoData)
  }
}
