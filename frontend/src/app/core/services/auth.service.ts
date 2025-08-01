import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isBrowser: boolean;

  constructor(
    private _httpClient: HttpClient,
    @Inject(PLATFORM_ID) private _plateformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this._plateformId);
  }

  login(user: any): Observable<any> {
    return this._httpClient.post<any>(`${environment.apiUrl}/auth/login`, user).pipe(
      tap(response => {
        if (this.isBrowser && response.token) {
          localStorage.setItem('token', response.token);
          if (response.user?.role) {
            localStorage.setItem('role', response.user.role); // 'admin' or 'provider'
          }
        }
      })
    );
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem("token") : null;
  }

  getRole(): string | null {
    return this.isBrowser ? localStorage.getItem('role') : null;
  }

  isLoggedIn(): boolean {
    return this.isBrowser && !!this.getToken();
  }
}