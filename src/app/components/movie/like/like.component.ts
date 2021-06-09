import { Component, OnInit } from '@angular/core';
import {ResultsMovie} from "../../../models/ResultsMovie";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  data:ResultsMovie[]
  img ='https://image.tmdb.org/t/p/original'

  constructor() { }

  ngOnInit(): void {
    this.data=JSON.parse(<any>localStorage.getItem('like'))
  }

  delete(id:number) {
    this.data=this.data.filter(value => value.id !==id)
    localStorage.setItem('like', JSON.stringify(this.data))
  }
}
