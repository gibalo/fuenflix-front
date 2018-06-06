import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

  private movies:Movie[] = [{
    id:1,
    title:"Prueba 1",
    description:"Description ... prueba 1",
    img:"assets/img/aquaman.png",
    type:".mp4"
  },{
    id:2,
    title:"Prueba 2",
    description:"Description ... prueba 1",
    img:"assets/img/batman.png",
    type:".mp4"
  }];

  private baseUrl:string = "http://localhost:28080/fuenflix-api/";

  constructor(private http:Http) {

  }

  get(id: number): Observable<Movie> {
    let movie = this.http
      .get(`${this.baseUrl}/content/${id}`, {headers: this.getHeaders()})
      .map(item => this.mapMovie(item));
      return movie;
  }

  getAll(): Observable<Movie[]> {
     let movie = this.http
      .get(`${this.baseUrl}/content`, {headers: this.getHeaders()})
      .map(item => this.mapMovies(item));
    return movie;
  }

  save(movie: Movie): Observable<Response> {
    console.log('Saving movies ' + JSON.stringify(movie));
    return this.http.put(`${this.baseUrl}/content`, JSON.stringify(movie), {headers: this.getHeaders()});
  }

  private getHeaders() {
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      return headers;
  }

  mapMovies(response: Response): Movie[] {
    return response.json().map(i => this.toMovie(i));
  }

  mapMovie(response: Response): Movie {
    return this.toMovie(response.json());
  }

    toMovie(m: any): Movie {
    return m;
  }
}
export interface Movie{
    id:number;
    name:string;
    description:string;
    price:number;
    path:string;
    imagePath:string;
    contentType:number;
    contentTypeName:string;

}
