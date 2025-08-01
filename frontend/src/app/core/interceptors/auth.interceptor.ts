import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("token");

  // Define auth routes where token should NOT be added
  const isAuthRoute = req.url.includes('/login') || req.url.includes('/signup') ||
    req.url.includes('/forgot-password');

  if (isAuthRoute) {
    return next(req);
  }

  // Add token for protected routes
  const authReq = token ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }) : req;

  return next(authReq);
};
