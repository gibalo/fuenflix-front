import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  movies: MovieComponent[] = [];

  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) {
    this.loadData();

  }

  loadData() {
  }

  ngOnInit() {

    // this.movies = this._movieService.getMovies();

  }

}
