import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { MovieComponent } from './components/movie/movie.component';
import { PlayerComponent } from './components/player/player.component';
import { ProfileComponent} from './components/shared/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'content', component: ContentComponent, canActivate:[AuthGuardService] },
  { path: 'mylist', component: MylistComponent, canActivate:[AuthGuardService] },
  { path: 'content/movie/:id', component: MovieComponent },
  { path: 'player', component: PlayerComponent , canActivate:[AuthGuardService]},
  { path: 'profile', component: ProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
