import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todos-list.component";

@Injectable({providedIn: "root"})

export class TodosApiService {
  readonly apiService = inject(HttpClient)

  getTodos() {
    return this.apiService.get<Todo[]>('shttps://jsonplaceholder.typicode.com/todos');
  }
}
