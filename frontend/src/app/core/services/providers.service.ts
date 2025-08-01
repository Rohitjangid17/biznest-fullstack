import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Provider } from '../../shared/interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  // get providers
  getProviders(): Observable<Provider[]> {
    return this._httpClient.get<Provider[]>(`${environment.apiUrl}/providers`);
  }

  // add provider
  addProvider(provider: Provider): Observable<Provider> {
    return this._httpClient.post<Provider>(`${environment.apiUrl}/providers`, provider);
  }

  // update provider
  updateProvider(provider: Provider, id: string): Observable<Provider> {
    return this._httpClient.put<Provider>(`${environment.apiUrl}/providers/${id}`, provider);
  }

  // delete provider
  deleteProvider(id: string): Observable<Provider> {
    return this._httpClient.delete<Provider>(`${environment.apiUrl}/providers/${id}`);
  }

  // get user by id
  getUserById(id: string): Observable<Provider> {
    return this._httpClient.get<Provider>(`${environment.apiUrl}/providers/${id}`);
  }
}
