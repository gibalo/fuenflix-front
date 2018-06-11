import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private service: AuthService;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.setLoginForm ();
    this.service = authService;
  }

  ngOnInit() {
  }

  setLoginForm () {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
      /*
      comentado por YO&FM para no necesitar poner user y password
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
      */
    });
  }

  authenticate() {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value);
  }

}
