import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Movie } from '../movie/movie.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminarea',
  templateUrl: './adminarea.component.html',
  styleUrls: ['./adminarea.component.css']
})
export class AdminareaComponent {

  url = 'content';
  movies: Movie[] = [];
  editMovie: Movie;
  addForm: FormGroup;

  constructor (private appService: AppService,private formBuilder: FormBuilder, private router: Router) {
    this.loadData();
    this.setAddForm();
  }

  loadData () {
    this.appService.get(this.url).subscribe(contents => {
      this.movies = contents;
    });
  }

  editData(){
    this.appService.post('content/'+this.editMovie.id,this.addForm.value).subscribe();
  }

  deleteData(){

    let id:number = this.editMovie.id;
    this.appService.delete('content/'+id).subscribe();
  }

  sendData() {
    this.appService.put('content',this.addForm.value).subscribe();
  }

  reload(){
    this.router.navigateByUrl('/HomeComponent', { skipLocationChange: true });
    this.router.navigate(["AdminareaComponent"]);
  }

  setItem(movie: Movie) {
    this.appService.setItem('movie', movie);
  }

  setEditForm(movie:Movie){
    this.editMovie = movie;
    this.addForm = this.formBuilder.group({
      name: [movie.name,Validators.required],
      description: [movie.description,Validators.required],
      contentType: [1],
      imagePath: [movie.imagePath,Validators.required],
      path: [movie.path,Validators.required]
    });
  }

  setAddForm() {
    this.addForm = this.formBuilder.group({
      name: [null,Validators.required],
      description: [null,Validators.required],
      contentType: [1],
      imagePath: [null,Validators.required],
      path: [null,Validators.required]
    });
  }

}
