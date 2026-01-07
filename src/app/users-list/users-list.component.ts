import {Component, inject, } from "@angular/core";
import {NgForOf} from "@angular/common";
import {User} from "./user.interface";
import {UsersApiService} from "../users-api.service";
import {UserCardComponent} from "./user-card/user-card.component";

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
  standalone: true,
  styleUrl: 'users-list.component.scss',
  imports: [
    NgForOf,
    UserCardComponent
  ]
})

export class UsersListComponent{
    readonly usersApiService = inject(UsersApiService);
    users:User[] = [];

    constructor() {
        this.usersApiService.getUsers().subscribe(
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
