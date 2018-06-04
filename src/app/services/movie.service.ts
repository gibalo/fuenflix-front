import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  private movies:Movie[] = [{
    title:"Prueba 1",
    description:"Description ... prueba 1",
    img:"assets/img/aquaman.png",
    type:".mp4"
  }];

  constructor() {

  }

  getMovies(){
    return this.movies;
  }


}

export interface Movie{
  title:string;
  description:string;
  img:string;
  type:string;
}
