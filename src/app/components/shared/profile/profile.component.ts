import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  editProfile: FormGroup;
  edit:boolean;

  constructor(private appService: AppService,private formBuilder: FormBuilder, private router: Router) {
    this.initForm();
    this.loadData();
    this.edit = true;
    this.isEditing();
   }

   isEditing(){
     if(this.edit){
      this.editProfile.controls['name'].disable();
      this.editProfile.controls['username'].disable();
      this.editProfile.controls['password'].disable();
      this.editProfile.controls['address'].disable();
      this.editProfile.controls['email'].disable();
     }else{
       this.editProfile.controls['name'].enable();
       this.editProfile.controls['username'].disable();
       this.editProfile.controls['password'].enable();
       this.editProfile.controls['address'].enable();
       this.editProfile.controls['email'].enable();
     }
   }

  ngOnInit() {

  }

  update(){

    this.profile.name = this.editProfile.value.name;
    this.profile.password = this.editProfile.value.password;
    this.profile.address = this.editProfile.value.address;
    this.profile.email = this.editProfile.value.email;

    this.appService.post('profile/',this.profile).subscribe();
    this.initForm();
    this.loadData();
    this.edit = true;
    this.isEditing();
  }

  loadData () {
    this.appService.get('profile/'+localStorage.getItem('ff-username')).subscribe(contents => {
      this.profile = contents;
      this.setEditForm();
    });
  }

  initForm(){
    this.editProfile = this.formBuilder.group({
      name: [null,Validators.required],
      username: [null,Validators.required],
      email: [null,Validators.required],
      address: [null,Validators.required],
      password: [null,Validators.required]
    });
  }

  setEditForm(){
    this.editProfile = this.formBuilder.group({
      name: [this.profile.name,Validators.required],
      username: [this.profile.username,Validators.required],
      email: [this.profile.email,Validators.required],
      address: [this.profile.address,Validators.required],
      password: [this.profile.password,Validators.required]
    });
  }
}
