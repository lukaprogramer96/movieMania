import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [

  {
    component:HomeComponent,
    path: ''
  },
  {
    component: MoviesComponent,
    path: 'movies'
  },
  {
    component: AddMovieComponent,
    path: 'add-movie'
  },
  {
    component: AddMovieComponent,
    path: 'add-movie/:id'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
