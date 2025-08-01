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

  // get admin menu
  getAdminMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("/api/admin/menu");
  }

  // get provider menu
  getProviderMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("/api/admin/menu");
  }
}
