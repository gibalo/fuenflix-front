import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService,Movie } from '../../services/movie.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private movies:Movie[] = [];

  constructor(private activatedRoute:ActivatedRoute, private _movieService:MovieService) {

    this.activatedRoute.params.subscribe( params => {

    });

  }

  ngOnInit() {

    this.movies = this._movieService.getMovies();

  }

}
