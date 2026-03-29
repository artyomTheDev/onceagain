import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./users-list/user.interface";

@Injectable({providedIn: 'root'})
export class UsersApiService{
private apiService = inject(HttpClient);

  getUsers(): Observable<User[]>{
      return this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
