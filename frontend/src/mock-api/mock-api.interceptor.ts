import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { adminMenu } from './admin-menu.mock';
import { providerMenu } from './provider-menu.mock';

export const mockApiInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<any> => {
    if (req.url.endsWith('/api/admin/menu') && req.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: adminMenu }));
    }

    if (req.url.endsWith('/api/provider/menu') && req.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: providerMenu }));
    }

    return next(req);
};