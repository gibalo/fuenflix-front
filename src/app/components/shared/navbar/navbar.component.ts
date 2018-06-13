import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  auth: AuthService;
  isAdmin:boolean;
  constructor(private authService: AuthService) {
    this.auth = authService;
  }

  ngOnInit() {
    if(localStorage.getItem("lvlff") == "2"){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
  }

}
