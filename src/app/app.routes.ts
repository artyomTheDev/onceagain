import { Routes } from '@angular/router';
import {UsersListComponent} from "./users-list/users-list.component";
import {MainPageComponent} from "./main-page/main-page.component";

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
];

//in future here will be
//like "ProvidedIn:root" on other pages
