import {Component, inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {User} from "./user.interface";

const consoleResponse = (response: any) => console.log(response)

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
  standalone: true,
  styleUrl: 'users-list.component.scss',
  imports: [
    NgForOf
  ]
})

export class UsersListComponent{
    readonly apiService = inject(HttpClient);
    users:User[] =[];

    constructor() {
        this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
          (response: any) => {
            this.users = response;
            console.log(this.users)
          }
        )
    }
    deleteUser(userIdToDelete:number){
      this.users = this.users.filter(
        user => user.id !== userIdToDelete
      );
    }
}
