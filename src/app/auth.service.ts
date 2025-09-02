import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  login(username: string, password: string): boolean {
    // Dummy login: accept if username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
