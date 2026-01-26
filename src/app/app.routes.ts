import { Routes } from '@angular/router';
import {UsersListComponent} from "./users-list/users-list.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {TodosListComponent} from "./todos-list/todos-list.component";
import {EmailComponent} from "./email/email.component";
import {AdminComponent} from "./admin/admin.component";

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
    component: UsersListComponent
  },
  {
    path: 'todos',
    component: TodosListComponent
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];
