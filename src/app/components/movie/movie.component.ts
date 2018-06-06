import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService,Movie } from '../../services/movie.service';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {

  private movie:Movie;

  constructor(private appService:AppService,private activatedRoute:ActivatedRoute, private _movieService:MovieService) {

    this.activatedRoute.params.subscribe( params => {
        this.movie = this._movieService.getMovie(params['id']);
    });

  }



}
