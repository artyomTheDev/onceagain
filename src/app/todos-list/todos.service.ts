import {Injectable} from "@angular/core";
import {Todo} from "./todos-list.component";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({ providedIn: "root" })
export class TodosService {
private todosSubject$:BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
todos$:Observable<Todo[]> = this.todosSubject$.asObservable()

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos)
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map(
        todo => {
          if (todo.id === editedTodo.id) {
            return editedTodo
          } else  {
            return todo;
          }
        }
      )
    )
  }

  createTodo(todo: Todo) {
    const isTodoExisting = this.todosSubject$.value.find(
      currentTodo => currentTodo.id === todo.id
    )
    if (isTodoExisting !== undefined) {
      alert('Айдишка то у задачи такая уже есть, пробуй иначе.')
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo])
      alert('Задача создана, поздравляю!')
    }
  }

  deleteTodo(todoIdToDelete: number) {
  this.todosSubject$.next(
    this.todosSubject$.value.filter(
      item => {
        return item.id !== todoIdToDelete
      }
    )
  )
  }
}
