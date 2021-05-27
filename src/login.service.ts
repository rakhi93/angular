import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedIn:boolean=false;
  constructor() { }
  loginUser(){
    this.isLoggedIn=true;
    console.log(this.isLoggedIn);
  }
}
