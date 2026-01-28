import { Routes } from '@angular/router';
import {UsersListComponent} from "./users-list/users-list.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {TodosListComponent} from "./todos-list/todos-list.component";
import {EmailComponent} from "./email/email.component";
import {AdminComponent} from "./admin/admin.component";
import {adminGuard} from "./auth/guards/admin.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full',
  },
  {
    path: 'main-page',
    component: MainPageComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'todos',
    component: TodosListComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard]
  }
];
