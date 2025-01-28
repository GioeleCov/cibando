import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  datiUtente = new ReplaySubject(1);
  apiBaseUrl = 'api/users'
  user;

  constructor(private http: HttpClient) { }

  saveUser(user: any) {
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, user);
  }

  getUserDetailByEmail(email: string) {
    return this.http.post<any>(`${this.apiBaseUrl}/user`, { email });
  }
}
