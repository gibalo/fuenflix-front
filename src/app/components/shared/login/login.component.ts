import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userExist:boolean;
  login:boolean;
  loginForm: FormGroup;
  registerForm: FormGroup;
  private service: AuthService;

  constructor(private navBar: NavbarComponent,private appService: AppService,private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.setLoginForm ();
    this.service = authService;
    this.login = true;
    this.userExist = false;
  }

  ngOnInit() {

  }

  register(){
    this.appService.put('user',this.registerForm.value).subscribe(resp =>{}, error => {
      this.userExist = true;
    });
  }

  setRegisterForm(){
    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      address: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }

  setLoginForm () {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  authenticate() {
    this.service.login(this.loginForm.value);
  }

}
