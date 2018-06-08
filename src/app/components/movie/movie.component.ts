import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Movie } from './movie.interface';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: [ './movie.component.css' ],
})
export class MovieComponent {

  private title:string;
  url = 'content';
  movie: Movie;
  private service: AppService;

  constructor (private appService: AppService) {
    this.service = appService;
    this.getDataFromService();
  }


  getDataFromService() {
    this.movie = this.service.getItem('movie');
  }

  loadData () {
    this.service.get(this.url + '/' + this.movie.id).subscribe(content => {
      this.movie = content;
    });
  }

  comprar(){
    this.service.get(this.url + '/' + this.movie.id).subscribe(content => {
      this.movie = content;
    });
  }



}
