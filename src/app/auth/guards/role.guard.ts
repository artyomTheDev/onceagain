import {CanActivateFn, Router} from "@angular/router";
import {UserRole} from "../auth-user.interface";
import {inject} from "@angular/core";
import {AuthService} from "../auth.service";

export const roleGuard = (allowedRoles: UserRole[]): CanActivateFn => {
  return (route, state) => {
   const authService = inject(AuthService);
   const user = authService.getCurrentUser();

   if(!user) {
     return inject(Router).parseUrl('/');
   }

   return allowedRoles.includes(user.role)
  }
}
