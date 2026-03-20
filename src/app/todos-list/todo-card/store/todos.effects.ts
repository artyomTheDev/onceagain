import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject, Injectable} from "@angular/core";
import {TodosApiService} from "../../todos-api.service";
import {TodosActions} from "./todos.actions";
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class TodosEffects {
  private actions$ = inject(Actions);
  private todosApiService = inject(TodosApiService);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.load),
      switchMap(() =>
        this.todosApiService.getTodos().pipe(
          map((todos) =>
            TodosActions.loadSuccess({todos})),
          catchError((err) => {
            const error = err?.message ?? JSON.stringify(err);
            return of(TodosActions.loadFailure({error}))
          }))
      ))
  )
}
