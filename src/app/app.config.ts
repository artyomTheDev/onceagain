import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from '@ngrx/store';
import { usersReducer } from "./users-list/store/user.reducer";
import { todosReducer } from "./todos-list/todo-card/store/todos.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore({
      users: usersReducer,
      todos: todosReducer,
    }),
  provideStoreDevtools({ maxAge:25 })
  ],
};
