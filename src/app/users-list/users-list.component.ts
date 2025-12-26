import {Component, inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const consoleResponse = (response: any) => console.log(response)

@Component({
  selector:'app-users-list',
  templateUrl: 'users-list.component.html',
  standalone: true,
  styleUrl: 'users-list.component.scss',
})

export class UsersListComponent{
    readonly apiService = inject(HttpClient);

    constructor() {
        this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
          consoleResponse
        )
    }
}
