import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import { User } from './public.module/login.component/interfaces/user.interface';
//import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

const urlBase = 'http://localhost:28080/fuenflixAPI/';
// const urlBase = 'http://10.0.122.244:28080/bluuRates/';

@Injectable()
export class AppService implements CanLoad {


/*  public options = {};

  public username = new Subject<string>();
  public photo = new Subject<string>();
*/

  constructor (private http: HttpClient, private router: Router) { }

  canLoad (): boolean {
    return true;
  }

/*
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

  login (user: User) {
    return this.http.post(urlBase + 'login', user, { observe: 'response' });
  }

  logout () {
    this.setOptions();
    return this.http.get(urlBase + 'logout', this.options);
  }

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

  setProfile (username: string, photo: string) {
    localStorage.setItem('username', username);
    this.username.next(username);
    if (photo) {
      this.photo.next(photo);
      localStorage.setItem('photo', photo);
    }
  }

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
  */

}
