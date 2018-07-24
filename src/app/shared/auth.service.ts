import { Injectable } from '@angular/core'
import { Http, RequestOptions } from '@angular/http';
import * as jwt_decode from "jwt-decode";
import { IUser } from './user.interface';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService {

  private user: IUser;
  private options: RequestOptions;

  constructor(private http: Http) {
  }

  login(infos) {
    return this.http.post('/api/auth/login', infos)
  }

  register(infos) {
    return this.http.post('/api/auth/register', infos)
  }

  getUser() {
    this.isLoggedIn();
    return this.user;
  }

  setUser(token) {
    localStorage.setItem('token', token)
    this.user = jwt_decode(token);
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if(token == null || token == 'null') {
      return
    }
    this.setUser(token);
    return token;
  }

  logout() {
    this.user = null;
    localStorage.removeItem('token');
  }

}
