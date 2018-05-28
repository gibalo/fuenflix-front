import { Component, OnInit } from '@angular/core';
import {NavLink} from '../../common/nav-link.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  navLinks: NavLink[];

  constructor(private router: Router) {
    this.navLinks = [{label: 'label1', path : ''}, {label: 'label2', path : ''}, {label: 'label3', path : ''}];
  }

  ngOnInit() {
  }

}
