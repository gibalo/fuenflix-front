import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BaseComponent } from './private/base/base.component';
import { LoginComponent } from './public/login/login.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule, MatIconRegistry,
  MatInputModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContentComponent } from './private/content/content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('login_a', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/login_a.svg'));
    iconRegistry.addSvgIcon('login_b', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/login_b.svg'));
    iconRegistry.addSvgIcon('login_c', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/login_c.svg'));
    iconRegistry.addSvgIcon('user', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/user.svg'));
    iconRegistry.addSvgIcon('hide', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/hide.svg'));
    iconRegistry.addSvgIcon('view', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/view.svg'));
  }
}
