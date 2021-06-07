import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../serveces/movie.service";
import {Movie} from "../../models/Movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie:Movie

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getPoplar().subscribe(value => {
      this.movie=value
    })
  }

}
