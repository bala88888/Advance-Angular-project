import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  //for interceptors===============================
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'userKey';

  dataInfotoken:any="hhhhhhbbbbbbb"

  login(username: string, password: string): boolean {
      // Hardcoded token and user key for POC only
    localStorage.setItem(this.TOKEN_KEY, 'bala');
    localStorage.setItem(this.USER_KEY, 'someUserKey123');
    // Dummy login: accept if username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
      localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    // return this.loggedIn;
    return !!this.getToken();
  }

    getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUserKey(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }

  



}
