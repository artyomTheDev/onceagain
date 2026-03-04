import {inject, Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {AuthUser} from "./auth-user.interface";
import {LoginResult} from "../login-dialog/login-result.interface";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})

export class AuthService {
  private currentUser$: BehaviorSubject<AuthUser | null> = new BehaviorSubject<AuthUser | null>(null);
  public user$ = this.currentUser$.asObservable();

  constructor(private router: Router) {}

  public login(data: LoginResult):void {
    this.currentUser$.next({
      role: data.role ,
      displayName: data.displayName
    })
  }

  loginAsAdmin():void {
    this.currentUser$.next({ role: "admin" })
  }

  loginAsUser():void {
    this.currentUser$.next({ role: "user" })
  }

  logout():void {
    this.currentUser$.next(null);
    this.router.navigate(['/']);
  }

  isAdmin(): boolean {
    return this.currentUser$.value?.role === "admin";
  }

  isLoggedIn(): boolean {
    return this.currentUser$.value !== null;
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUser$.value
  }
}
