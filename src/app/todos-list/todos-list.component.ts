import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TodosApiService} from "./todos-api.service";
import {TodoCardComponent} from "./todo-card/todo-card.component";
import {CreateTodoFormComponent} from "../create-todo-form/create-todo-form.component";
import {AuthService} from "../auth/auth.service";
import {Store} from "@ngrx/store";
import {TodosActions} from "./todo-card/store/todos.actions";
import {selectTodosEntities} from "./todo-card/store/todos.selectors";

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
    NgIf,
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})

export class TodosListComponent {
  readonly TodosApiService = inject(TodosApiService);
  readonly user$ = inject(AuthService).user$
  private store = inject(Store);
  protected todos$ = this.store.select(selectTodosEntities)

  constructor() {

    this.TodosApiService.getTodos().subscribe(
      (response: any) => this.store.dispatch(TodosActions.set({ todos: response }))
    )
  }

  public deleteTodo(id: number):void {
    this.store.dispatch(TodosActions.delete({ id }))
  }

  public createTodo(formData: any) {
    this.store.dispatch(TodosActions.create({ todo: formData }))
  }
  public editTodo(todo : Todo) {
    this.store.dispatch(TodosActions.edit({todo}))
  }

  public toggleTodo(id: number) {
    this.store.dispatch(TodosActions.toggle({ id }))
  }
}
