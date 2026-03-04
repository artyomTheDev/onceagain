import {Component, inject } from "@angular/core";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {UsersApiService} from "../users-api.service";
import {UserCardComponent} from "./user-card/user-card.component";
import {CreateUserFormComponent} from "../create-user-form/create-user-form.component";
import {AuthService} from "../auth/auth.service";
import {Store} from "@ngrx/store";
import {UsersActions} from "./store/users.actions";
import {selectUsersEntities} from "./store/user.selectors";

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
  standalone: true,
  styleUrl: 'users-list.component.scss',
  imports: [
    NgForOf,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent,
    NgIf
  ]
})

export class UsersListComponent {
  readonly usersApiService: UsersApiService = inject(UsersApiService);
  readonly authService: AuthService = inject(AuthService);
  readonly user$ = this.authService.user$;
  private store = inject(Store);
  protected users$ = this.store.select(selectUsersEntities);

  constructor() {
    this.usersApiService.getUsers().subscribe((response: any): void => {
        this.store.dispatch(UsersActions.set({users: response}))
      }
    )
  }

  public deleteUser(id: number): void {
    this.store.dispatch(UsersActions.delete({id}))
  }

  public createUser(formData: any): void {
    const user = {
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.companyName,
      }
    }

    this.store.dispatch(UsersActions.create({user}))
  }

  public editUser(user: any) {
    this.store.dispatch(UsersActions.edit({user}))
  }
}
