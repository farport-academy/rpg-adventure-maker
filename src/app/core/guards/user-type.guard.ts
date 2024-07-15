import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserTypes } from '../models/users';
import { checkDifferentUrlsAndRedirects } from '../utils/url.utils';


export const userTypeGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const currentUser = authService.currentUser;

  console.log(currentUser.type)
  switch (currentUser.type) {
    case UserTypes.MASTER:
      return checkDifferentUrlsAndRedirects(state.url,'/master',router);
    case UserTypes.PLAYER:
     return checkDifferentUrlsAndRedirects(state.url,'/player',router);
    default:
      router.navigate(['/']);
      return false;
  }
};
