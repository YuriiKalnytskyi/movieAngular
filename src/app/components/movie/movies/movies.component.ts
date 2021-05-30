import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../models/Movie";
import {MovieService} from "../../../serveces/movie.service";



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie

  constructor(private MovieService:MovieService) { }

  ngOnInit(): void {
    this.MovieService.getMovie(2).subscribe(value => {
      this.movies=value
      console.log(value)
      console.log(this.movies)
    })
  }

  next(page:number){
    this.MovieService.getMovie(this.movies.page+page).subscribe(value => {
      this.movies=value
    })
  }
  back(page:number){
    this.MovieService.getMovie(this.movies.page-page).subscribe(value => {
      this.movies=value
    })
  }
  first(page:number){
    this.MovieService.getMovie(page).subscribe(value => {
      this.movies=value
    })
  }
  last(page:number){
    this.MovieService.getMovie(page).subscribe(value => {
      this.movies=value
    })
  }


}
