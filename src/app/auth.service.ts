import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setloggedIn(value) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }
  getUserDetails(username, password) {
    return this.http.post('/api/auth', {
      username, password
    });
  }
}
