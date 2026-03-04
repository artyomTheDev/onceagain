import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Todo} from "../../todos-list.component";

export const TodosActions = createActionGroup({
    source:'todos',
  events: {
      'set': props<{todos: Todo[]}>(),

      'edit': props<{todo: Todo}>(),

      'create': props<{ todo: Todo }>(),
      'delete': props<{ id: number }>(),
      'toggle': props<{ id: number }>(),

      'load': emptyProps(),
      'loadSuccess': props<{ todos: Todo[] }>(),
      'loadFailure': props<{ error: string }>(),
  }
})
