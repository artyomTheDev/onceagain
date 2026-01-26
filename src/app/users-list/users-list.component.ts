import {Component, inject, } from "@angular/core";
import {AsyncPipe, NgForOf} from "@angular/common";
import {UsersApiService} from "../users-api.service";
import {UserCardComponent} from "./user-card/user-card.component";
import {UsersService} from "./users.service";
import {CreateUserFormComponent} from "../create-user-form/create-user-form.component";

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
  standalone: true,
  styleUrl: 'users-list.component.scss',
  imports: [
    NgForOf,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent
  ]
})

export class UsersListComponent{
    readonly usersApiService:UsersApiService = inject(UsersApiService);
    readonly usersService:UsersService = inject(UsersService);

    constructor() {
        this.usersApiService.getUsers().subscribe(
          (response: any):void  => {
            this.usersService.setUsers(response);
          }
        )

      this.usersService.users$.subscribe(
        users => console.log(users)
      )
    }
    public deleteUser(userIdToDelete:number):void {
      this.usersService.deleteUser(userIdToDelete)
    }

    public createUser(formData: any):void {
      this.usersService.createUser({
        id: new Date().getTime(),
        name: formData.name,
        email: formData.email,
        website: formData.website,
        company: {
          name: formData.companyName,
        },
      });
    }

  public editUser(user: any) {
    console.log('Получен user:', user);
    console.log('Тип user:', typeof user);
    console.log('Есть ли company?', user?.company);

    if (user && user.company) {
      this.usersService.editUser(user);
    } else {
      console.log('Проблема: user или company = undefined');
    }
  }
}
