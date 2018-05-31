import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  private movies:any[] = [];

  constructor(private _movieService:MovieService) {

  }

  getMovies(){
    //llamar movies
    this.movies = [];
    return this.movies;
  }

  getMoviesByFilter(name:string){
    //buscar pelicula
    this.movies = [];
    return this.movies;
  }
}
