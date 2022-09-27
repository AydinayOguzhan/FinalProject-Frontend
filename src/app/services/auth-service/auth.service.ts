import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged:boolean

  constructor() { }

  //TODO: Backend gelince burayı düzelt
  isAuthenticated(logged:boolean) {
    if (logged) {
      this.logged = true;
      return this.logged;
    }
    this.logged = false;
    return this.logged;
  }
}
