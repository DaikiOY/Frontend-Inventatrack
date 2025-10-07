import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../profile/user.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private apiUrl = 'https://fake-inventory-api-pb0q.onrender.com/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User | null> {
    return this.http
      .get<User[]>(`${this.apiUrl}?username=${username}&password=${password}`)
      .pipe(
        map(users => (users.length > 0 ? users[0] : null))
      );
  }
}
