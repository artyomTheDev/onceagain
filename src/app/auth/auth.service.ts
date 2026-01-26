import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {AuthUser} from "./auth-user.interface";
import {LoginResult} from "../login-dialog/login-result.interface";

@Injectable({providedIn: 'root'})

export class AuthService {
  private currentUser$: BehaviorSubject<AuthUser | null> = new BehaviorSubject<AuthUser | null>(null);
  public user$ = this.currentUser$.asObservable();

  public login(data: LoginResult):void {
    this.currentUser$.next({
      isAdmin:data.isAdmin,
      displayName: data.displayName
    })
  }

  loginAsAdmin():void {
    this.currentUser$.next({ isAdmin: true })
  }

  loginAsUser():void {
    this.currentUser$.next({ isAdmin: false })
  }

  logout():void {
    this.currentUser$.next(null)
  }

  isAdmin(): boolean {
    return this.currentUser$.value?.isAdmin === true;
  }

  isLoggedIn(): boolean {
    return this.currentUser$.value !== null;
  }
}
