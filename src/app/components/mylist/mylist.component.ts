import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Movie } from '../movie/movie.interface';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

    title:string[];
    url = 'content/filter';
    movies: Movie[] = [];
    private service: AppService;

    constructor (private appService: AppService) {
      this.service = appService;
      this.loadData();
    }

    loadData () {
      this.service.post(this.url,{contentType:1,user:localStorage.getItem('ff-username')}).subscribe(contents => {
        this.movies = contents;
      });
    }

    setItem(movie: Movie) {
      this.service.setItem('movie', movie);
    }

    titleSplit(){

      for(let num = 0; num < this.movies.length; num++){
        let fullTitle:string[] = this.movies[num].name.split(":",2);
        this.movies[num].name = fullTitle[0];
        this.title[num] = fullTitle[1];
      }

    }

    ngOnInit () {

    }


}
