import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Movie } from './movie.interface';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: [ './movie.component.css' ],
})
export class MovieComponent {

  private notOwned:boolean;
  private title:string;
  url = 'content';
  movie: Movie;
  private service: AppService;

  constructor (private appService: AppService) {
    this.service = appService;
    this.getDataFromService();
    this.notOwned = true;
  }


  getDataFromService() {
    this.movie = this.service.getItem('movie');
  }

  loadData () {

    this.service.get(this.url + '/' + this.movie.id).subscribe(content => {
      this.movie = content;
    });

    this.service.post(this.url,{contentType:1,user:localStorage.getItem('ff-username')}).subscribe(contents => {
      contents.forEach( content => {
        if(content.name == this.movie.name){
          this.notOwned = false;
        }
      });
    });
  }

  comprar(){
    this.service.post('buy',{content: this.movie.id, user: localStorage.getItem("ff-username")}).subscribe(content => {
      this.movie = content;
    });

  }



}
