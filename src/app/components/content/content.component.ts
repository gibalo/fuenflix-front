import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Movie } from '../movie/movie.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.css' ]
})

export class ContentComponent implements OnInit {

  title:string[];
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

    // this.movies = [{
    //   id: 1,
    //   name: 'Prueba 1',
    //   description: 'Description ... prueba 1',
    //   imagePath: 'assets/img/aquaman.png',
    //   contentTypeName: '.mp4',
    //   contentType: 1,
    //   price: 123,
    //   path: ''
    // }];
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
