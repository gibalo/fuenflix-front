import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService,Movie } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {

  @Input() movie:Movie;

  constructor(private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe( params => {

    });

  }


}
