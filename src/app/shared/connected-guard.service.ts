import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ConnectedGuard {

  constructor( private authService : AuthService, private router : Router ) {
  }

  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if(this.authService.isLoggedIn()) this.router.navigate(['/books']);
    else {
      return true;
    }
  }

  canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if(this.authService.isLoggedIn()) this.router.navigate(['/books']);
    else {
      return true;
    }
    // else navigate to login
  }

}