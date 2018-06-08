import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';

// videogular
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { MovieComponent } from './components/movie/movie.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { PlayerComponent } from './components/player/player.component';
import { AppService } from './app.service';
import { MylistComponent } from './components/mylist/mylist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContentComponent,
    MovieComponent,
    ProfileComponent,
    PlayerComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuardService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
