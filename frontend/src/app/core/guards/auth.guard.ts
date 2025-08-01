import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const token = authService.getToken();
  const requiredRoles = route.data['roles'];
  const authOnly = route.data['authOnly'];

  // Public route: allow only if not logged in
  if (authOnly === false) {
    if (token) {
      router.navigate(['/']);
      return false;
    }
    return true;
  }

  // Protected route
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // If route has role restriction
  if (requiredRoles?.length) {
    const role = authService.getRole();
    if (!requiredRoles.includes(role)) {
      router.navigate(['/']);
      return false;
    }
  }

  return true;
};
