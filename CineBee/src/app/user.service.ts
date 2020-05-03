import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isUserLoggedIn;
  email

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
  	this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

  reSetUserLoggedIn() {
    this.isUserLoggedIn = false;
  }

  setEmail(email1) {
    this.email=email1
  }

  getEmail() {
    return this.email
  }

}
