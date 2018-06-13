import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Movie } from '../movie/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent {

    url = 'content/filter';
    movies: Movie[] = [];

    constructor (private appService: AppService, private router: Router) {
      this.loadData();
    }

    loadData () {
      this.appService.post(this.url,{contentType:1,user:localStorage.getItem('ff-username')}).subscribe(contents => {
        this.movies = contents;
      });
    }

    setItem(movie: Movie) {
      this.appService.setItem('movie', movie);
    }

}
