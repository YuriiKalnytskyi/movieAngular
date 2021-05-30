import {Component, Input, OnInit} from '@angular/core';
import {ResultsMovie} from "../../../models/ResultsMovie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieImg='https://image.tmdb.org/t/p/original'

  @Input()
  movie:ResultsMovie

  constructor() { }

  ngOnInit(): void {
  }

}
