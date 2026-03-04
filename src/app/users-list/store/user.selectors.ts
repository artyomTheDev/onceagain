import {User} from "../user.interface";
import {createFeatureSelector, createSelector} from "@ngrx/store";

type UsersState = { entities: User[]}

const selectUsersState = createFeatureSelector<UsersState>('users')

export const selectUsersEntities = createSelector( selectUsersState, (state) => state.entities)
