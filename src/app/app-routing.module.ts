import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from './private/base/base.component';
import {LoginComponent} from './public/login/login.component';
import {ContentComponent} from './private/content/content.component';


export const routes: Routes = [
  { path: '', redirectTo: '/private', pathMatch: 'full' },
  { path: 'private', component: BaseComponent, children: [
      {path: '', redirectTo: 'content', pathMatch: 'full'},
      {path: 'content', component: ContentComponent, outlet: 'app-content'}
    ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }


