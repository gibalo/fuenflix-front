import { Injectable } from '@angular/core';

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

  constructor() {

  }

  getMovies(){
    return this.movies;
  }


}

export interface Movie{
  id:number;
  title:string;
  description:string;
  img:string;
  type:string;
}
