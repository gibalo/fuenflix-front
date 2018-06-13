import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { MovieComponent } from './components/movie/movie.component';
import { PlayerComponent } from './components/player/player.component';
import { AdminareaComponent } from './components/adminarea/adminarea.component';
import { ProfileComponent} from './components/shared/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/shared/login/login.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'content', component: ContentComponent, canActivate: [AuthGuardService] },
  { path: 'mylist', component: MylistComponent, canActivate: [AuthGuardService] },
  { path: 'content/movie/:id', component: MovieComponent , canActivate: [AuthGuardService] },
  { path: 'mylist/movie/:id', component: MovieComponent , canActivate: [AuthGuardService] },
  { path: 'player', component: PlayerComponent , canActivate: [AuthGuardService]},
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminareaComponent , canActivate: [AuthGuardService]},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
