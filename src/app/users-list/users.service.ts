import {Injectable} from "@angular/core";
import {User} from "./user.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({ providedIn: "root" })
export class UsersService {
 private usersSubject$:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
 users$:Observable<User[]> = this.usersSubject$.asObservable();

  setUsers(users: Array<User>) {
      this.usersSubject$.next(users)
  }

  editUser(editedUser: User) {
    console.log('Сервис получил:', editedUser);

    const updatedUsers = this.usersSubject$.value.map(user =>
      user.id === editedUser.id ? editedUser : user
    );

    console.log('Отправляю в поток:', updatedUsers);
    this.usersSubject$.next(updatedUsers);

    this.usersSubject$.next(
      this.usersSubject$.value.map(
        user => {
          if (user.id === editedUser.id) {
            return editedUser
          } else {
            return user
          }
        }
      )
    )
  }

  createUser(user: User) {
    const userIsExisting = this.usersSubject$.value.find(
      currentElement => currentElement.email === user.email
    )

    if(userIsExisting !== undefined) {
      alert('Такой email уже зарегистрирован!')
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user])
      alert('Пользователь успешно зарегистрирован')
    }
  }

  deleteUser(userIdToDelete: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter(
        item => {
          return userIdToDelete !== item.id;
        }
      )
    )
  }
}
