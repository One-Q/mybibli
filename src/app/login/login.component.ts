import { Component, OnInit } from "@angular/core";
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private navigator: Router) {}

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      ]]
    })
  }

  login() {
    console.log(this.form.controls['password'].errors)
    if(this.form.valid) {
      this.authService.login(this.form.value).subscribe(data => {
        let newData = data.json()
        this.authService.setUser(newData.token)
        this.navigator.navigate(['/books'])
      })
    }
  }

}