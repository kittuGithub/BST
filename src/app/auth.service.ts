import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { }

  setloggedIn(value) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }
  getUserDetails(username, password) {
    return this.http.post('/api/auth', {
      username, password
    });
  }
}
