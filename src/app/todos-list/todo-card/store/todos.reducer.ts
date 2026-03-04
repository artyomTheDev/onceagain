import {Todo} from "../../todos-list.component";
import {createReducer, on} from "@ngrx/store";
import {TodosActions} from "./todos.actions";

const TODOS_STATUS = {
  idle: 'idle',
  loading: 'loading',
  loaded: 'loaded',
  error: 'error',
} as const;

type TodosStatus = typeof TODOS_STATUS[keyof typeof TODOS_STATUS]
type TodosState = {entities: Todo[]; status: TodosStatus; error: string | null}

const initialState: TodosState = {
  entities: [],
  status: TODOS_STATUS.idle,
  error: null,
}

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.set, (state, payload) => ({
    ...state,
    entities: payload.todos
  })),
  on(TodosActions.edit, (state, payload) => {
    const nextEntities = state.entities.map((todo) => {
      if (todo.id === payload.todo.id) {
        return payload.todo
      } else {
        return todo
      }
    });
    return {
      ...state,
      entities: nextEntities,
    }}),
  on(TodosActions.create, (state, payload) => ({
  ...state,
  entities: [...state.entities, payload.todo]
})),
  on(TodosActions.delete, (state, payload) => ({
    ...state,
    entities: state.entities.filter(
      (todo) => todo.id !== payload.id)
  })),
  on(TodosActions.toggle, (state, payload) => ({
    ...state,
    entities: state.entities.map((todo) => {
      if (todo.id === payload.id){
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })
  })),
  on(TodosActions.load, (state) => ({
    ...state,
    status: TODOS_STATUS.loading,
    error: null
  })),
);
