import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ReactComponent } from './react';
import { ProfileComponent } from './profile';
//import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth-guard.service';
import { ConnectedGuard } from './shared/connected-guard.service';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookManageComponent } from './books/book-manage/book-manage.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'register', canActivate: [ConnectedGuard], component: RegisterComponent },
  { path: 'login', canActivate: [ConnectedGuard], component: LoginComponent },
  { path: 'books',canActivate: [AuthGuard] , component: BookListComponent },
  { path: 'books/:isbn',canActivate: [AuthGuard] , component: BookManageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'react', component: ReactComponent },
  { path: '**',    component: NoContentComponent },
];
