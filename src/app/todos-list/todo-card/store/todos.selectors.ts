import {Todo} from "../../todos-list.component";
import {createFeatureSelector, createSelector} from "@ngrx/store";

type TodosState = {entities: Todo[]}

const selectTodosState = createFeatureSelector<TodosState>('todos')

export const selectTodosEntities = createSelector( selectTodosState, (state) => state.entities)
