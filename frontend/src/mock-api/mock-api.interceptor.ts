import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { adminMenu, clientMenu, financeMenu, marketingMenu, providerMenu, superAdminMenu, supportMenu } from './menus.mock';

export const mockApiInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<any> => {
  // super admin menu interceptor
  if (req.url.endsWith('/api/super-admin/menu') && req.method === 'GET') {
    return of(new HttpResponse({ status: 200, body: superAdminMenu }));
  }

  // admin menu interceptor
  if (req.url.endsWith('/api/admin/menu') && req.method === 'GET') {
    return of(new HttpResponse({ status: 200, body: adminMenu }));
  }

  // finance menu interceptor
  if (req.url.endsWith('/api/finance/menu') && req.method === 'GET') {
    return of(new HttpResponse({ status: 200, body: financeMenu }));
  }

  // support menu interceptor
  if (req.url.endsWith('/api/support/menu') && req.method === 'GET') {
    return of(new HttpResponse({ status: 200, body: supportMenu }));
  }

  // marketing menu interceptor
  if (req.url.endsWith('/api/marketing/menu') && req.method === 'GET') {
    return of(new HttpResponse({ status: 200, body: marketingMenu }));
  }

  // provider menu interceptor
  if (req.url.endsWith('/api/provider/menu') && req.method === 'GET') {
    return of(new HttpResponse({ status: 200, body: providerMenu }));
  }

  // client menu interceptor
  if (req.url.endsWith('/api/client/menu') && req.method === 'GET') {
    return of(new HttpResponse({ status: 200, body: clientMenu }));
  }

  return next(req);
};
