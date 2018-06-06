import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Movie } from './movie.interface';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: [ './movie.component.css' ],
})
export class MovieComponent {

  movie: Movie;

  constructor (private appService: AppService) {
    this.loadData();
  }


  loadData() {
  }

  test () {
    console.log('TEST');
    this.appService.get('test').subscribe( contents => {
      console.log('BECARIO');
    });
  }


}
