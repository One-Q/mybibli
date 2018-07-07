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
    return this.user;
  }

  setUser(token) {
    localStorage.setItem('token', token)
    this.user = jwt_decode(token);
  }

  isLoggedIn() {
    return localStorage.getItem('token')
  }

}
