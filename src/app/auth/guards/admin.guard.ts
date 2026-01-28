import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "../auth.service";

export const adminGuard: CanActivateFn = (route, state) => {
  console.log('1. гвард запустился')
  const authService = inject(AuthService);
  console.log('2.isAdmin() возвращает' , authService.isAdmin());

  if (authService.isAdmin()) {
    console.log('3. пускаем на роут')
    return true;
  }

  console.log('4.блокируем редирект')
  const router = inject(Router);
  return router.parseUrl('/')
}
