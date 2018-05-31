import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios

//import { MovieService} from './services/movie.service';
import {AuthService} from './services/auth.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { MovieComponent } from './components/movie/movie.component';
import { ProfileComponent } from './components/shared/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContentComponent,
    MovieComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [/*MovieService*/AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
