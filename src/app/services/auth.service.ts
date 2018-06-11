import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

// (window as any).global = window;

@Injectable()
export class AuthService {

  userProfile: any;
  appService: AppService;

  constructor(public router: Router, appService: AppService) {
    this.appService = appService;
  }

  startApp () {
    // TODO
    this.isAuthenticated() ? this.router.navigate(['/home']) : this.router.navigate(['/login']);
  }

  public login(request: any): void {
    this.appService.post('login', request).subscribe(resp => {
      console.log('Auth!!1');
      localStorage.setItem('access_token', 'TOKEN');
      this.router.navigate(['/home']);
    });
    localStorage.setItem('access_token', 'TOKEN');
    this.router.navigate(['/home']);

    // this.auth0.authorize();
    // Llamar al servicio ligin de tu api
  }

  // private setSession(authResult): void {
  //   // Set the time that the Access Token will expire at
  //   const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  //   localStorage.setItem('access_token', authResult.accessToken);
  //   localStorage.setItem('id_token', authResult.idToken);
  //   localStorage.setItem('expires_at', expiresAt);
  // }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    /* TODO */
    return localStorage.getItem('access_token') != null;

    // Check whether the current time is past the
    // Access Token's expiry time
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    // return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    throw new Error('Access Token must exist to fetch profile');
  }

  const self = this;
  // this.auth0.client.userInfo(accessToken, (err, profile) => {
  //   if (profile) {
  //     self.userProfile = profile;
  //   }
  //   cb(err, profile);
  // });
}

}
