import { User } from "../user.interface";
import { createReducer, on } from "@ngrx/store";
import { UsersActions } from './users.actions';

const initialState: { entities: User[] } = {
  entities: [],
}

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.set, (state, payload) => ({
    ...state,
    entities: payload.users,
  })),
  on(UsersActions.edit, (state, payload) => ({
    ...state,
    entities: state.entities.map((user) => {
      if (user.id === payload.user.id) {
        return payload.user;
      } else {
        return user
      }
    }),
  })),
  on(UsersActions.create, (state, payload) => ({
    ...state,
    entities: [...state.entities, payload.user],
  })),
  on(UsersActions.delete, (state, payload) => ({
    ...state,
    entities: state.entities.filter((user) => user.id !== payload.id),
  }))
);
