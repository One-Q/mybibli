import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard {

  constructor( private authService : AuthService, private router : Router ) {
  }

  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if(this.authService.isLoggedIn()) {
      return true;
    }
    else
      this.router.navigate(['/login'])
    // else navigate to login
  }

  canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if(this.authService.isLoggedIn()) {
      return true;
    }
    else this.router.navigate(['/login'])
    // else navigate to login
  }

}