import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean;
  user: User = { username: null, password: null };

  constructor(/*private service: AppService, */private router: Router, private formBuilder: FormBuilder) {
    this.setLoginForm ();
    this.hide = true;
  }

  setLoginForm () {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  ngOnInit() {
  }

  authenticate(){

  }
}
