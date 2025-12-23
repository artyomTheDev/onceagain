import { Routes } from '@angular/router';
import {UsersListComponent} from "./users-list/users-list.component";

export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent
  }
];

//in future here will be
//like "ProvidedIn:root" on other pages
