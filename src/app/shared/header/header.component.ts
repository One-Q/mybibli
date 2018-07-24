import { Component } from "@angular/core";
import { AuthService } from '../auth.service';
import { IUser } from '../user.interface';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: IUser;

  constructor(
    private authService: AuthService,
    private router: Router
  ){
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

}