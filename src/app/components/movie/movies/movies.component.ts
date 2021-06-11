import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../models/Movie";
import {MovieService} from "../../../serveces/movie.service";
import {DataTransferService} from "../../../serveces/data-transfer.service";



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie

  constructor(private MovieService:MovieService ,private dataTransferService :DataTransferService) { }

  ngOnInit(): void {
    this.MovieService.getMovie(1).subscribe(value => {
      this.movies=value
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
