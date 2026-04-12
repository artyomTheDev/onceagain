import { CanActivateFn, Router } from "@angular/router";
import { UserRole } from "../auth-user.interface";
import { inject } from "@angular/core";
import { AuthService } from "../auth.service";

export const roleGuard = (allowedRoles: UserRole[]): CanActivateFn => {
  return (route, state) => {
   const authService = inject(AuthService);
   const router = inject(Router);
   const user = authService.getCurrentUser();

   if(!user) {
     return router.parseUrl('/');
   }

   if (!allowedRoles.includes(user.role)) {
     return router.parseUrl('/forbidden')
   }
   return true
  };
};
