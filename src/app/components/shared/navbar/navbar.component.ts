import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  auth: AuthService;

  constructor(private authService: AuthService) {
    this.auth = authService;
  }

  ngOnInit() {
  }

  buscarContenido(item: string) {

  }
}
