import {Component, inject} from '@angular/core';
import {NgForOf} from "@angular/common";
import {UserCardComponent} from "../users-list/user-card/user-card.component";
import {TodosApiService} from "./todos-api.service";

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  readonly TodosApiService = inject(TodosApiService);
  todos: Todo[] = [];

  constructor() {

    this.TodosApiService.getTodos().subscribe(
      (response: any) => {
        this.todos = response
      }
    )
  }
}
