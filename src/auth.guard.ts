import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _loginservice:LoginService,private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this._loginservice.isLoggedIn)
      {
        this._router.navigateByUrl('/login')
        alert("You are not authorized to login .Please login first");
      }
    return this._loginservice.isLoggedIn;
  }
  
}
