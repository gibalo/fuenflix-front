import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Movie } from '../movie/movie.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.css' ]
})

export class ContentComponent implements OnInit {

  url = 'content';
  movies: Movie[] = [];
  private service: AppService;

  constructor (private appService: AppService) {
    this.service = appService;
    this.loadData();
  }

  loadData () {
    this.service.get(this.url).subscribe(contents => {
      this.movies = contents;
    });
  }

  setItem(movie: Movie) {
    this.service.setItem('movie', movie);
  }
  ngOnInit () {

  }

}
