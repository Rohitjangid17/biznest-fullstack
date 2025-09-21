import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../app/shared/interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  // get super admin menu
  getSuperAdminMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("/api/super-admin/menu");
  }

  // get admin menu
  getAdminMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("/api/admin/menu");
  }

  // get finance menu
  getFinanceMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("/api/finance/menu");
  }

  // get support menu
  getSupportMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("/api/support/menu");
  }

  // get marketing menu
  getMarketingMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("/api/marketing/menu");
  }

  // get provider menu
  getProviderMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("/api/provider/menu");
  }

  // get client menu
  getClientMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("/api/client/menu");
  }
}
