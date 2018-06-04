import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService,Movie } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  private movies:Movie[] = [];

  constructor(private activatedRoute:ActivatedRoute, private _movieService:MovieService) {

    this.activatedRoute.params.subscribe( params => {

    });

  }

  ngOnInit() {

    this.movies = this._movieService.getMovies();

  }

}
