import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieService} from "./serveces/movie.service";
import { MoviesComponent } from './components/movie/movies/movies.component';
import { MovieComponent } from './components/movie/movie/movie.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { LikeComponent } from './components/movie/like/like.component';

let routers:Routes=[
  {path:'header' , component:HeaderComponent},
  {path:'home' , component:HomeComponent},
  {path:'movie' , component:MoviesComponent},
  {path:'movie/:id', component:MovieDetailComponent},
  {path:'like', component:LikeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    HeaderComponent,
    HomeComponent,
    MovieDetailComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
