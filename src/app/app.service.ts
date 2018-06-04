import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import { User } from './public.module/login.component/interfaces/user.interface';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

const urlBase = 'http://localhost:28080/fuenflixAPI/';
// const urlBase = 'http://10.0.122.244:28080/bluuRates/';

@Injectable()
export class AppService implements CanLoad {

  public options = {};

  public username = new Subject<string>();
  public photo = new Subject<string>();

  constructor (private http: HttpClient, private router: Router) { }

  canLoad (): boolean {
    return true;
  }

  setOptions () {
    this.options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') ? localStorage.getItem('token') : '' ),
      responseType: 'json'
    };
  }
  setOptionsEmptyResponse () {
    this.options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')),
      responseType: 'text'
    };
  }


  /* LOGIN - LOGOUT */
  login (user: User) {
    return this.http.post(urlBase + 'login', user, { observe: 'response' });
  }

  logout () {
    this.setOptions();
    return this.http.get(urlBase + 'logout', this.options);
  }

  /* GET - POST - PUT - DELETE */

  get (url: string): Observable<any> {
    this.setOptions();
    return this.http.get<any>(urlBase + url, this.options);
  }

  post (url: string, body: any): Observable<any> {
    this.setOptionsEmptyResponse();
    return this.http.post(urlBase + url, body, this.options);
  }

  put (url: string, body: any): Observable<any> {
    this.setOptionsEmptyResponse();
    return this.http.put<any>(urlBase + url, body, this.options);
  }

  delete (url: string): Observable<any> {
    this.setOptionsEmptyResponse();
    return this.http.delete<any>(urlBase + url, this.options);
  }


  /* OTHER METHODS */
  setProfile (username: string, photo: string) {
    localStorage.setItem('username', username);
    this.username.next(username);
    if (photo) {
      this.photo.next(photo);
      localStorage.setItem('photo', photo);
    }
  }

  // openSnackBar (message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }



  // updatePhotoFromLocalStorage () {
  //   this.photo.next(localStorage.getItem('photo'));
  // }
  //
  // updateUsernameFromLocalStorage () {
  //   this.username.next(localStorage.getItem('username'));
  // }
  //
  // displayAlert (success: boolean, code: number, msg: string) {
  //   success ? this.notificationsService.success('Success', msg ? msg : '')
  //     : this.notificationsService.error('Error (' + code + ')',  msg ? msg : '');
  //   if (code === 401) {
  //     localStorage.clear();
  //     setTimeout(() => this.router.navigate(['login']), 3000);
  //   }
  // }
  //

  errorManager (error: HttpErrorResponse) {
    console.log('ERROR CODE: ' + error.status);
    console.log('ERROR MSG: ' + error.statusText);
    this.snackBarMsg.openSnackBar(3, 1500, error.statusText);

    if (error.status === 401) {
      this.clearCredentialsAndRedirectToLogin();
    }
  }

  clearCredentialsAndRedirectToLogin () {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
