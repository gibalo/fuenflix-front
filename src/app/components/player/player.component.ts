import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService,Movie } from '../../services/movie.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {

  @Input() movie:Movie;

  constructor() {

  }


}
