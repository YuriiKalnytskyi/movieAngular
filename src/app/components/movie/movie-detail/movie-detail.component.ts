import {Component, OnInit} from '@angular/core';
import {ResultsMovie} from "../../../models/ResultsMovie";
import {MovieService} from "../../../serveces/movie.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";
import {Video} from "../../../models/video";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: ResultsMovie
  id: number
  video: Video
  genres:any
  videoUrl: SafeResourceUrl;
  dangerousVideoUrl: string;

  private like = JSON.parse(<string>localStorage.getItem('like'))
  likes = this.like || []



  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) {
    this.activatedRoute.params.subscribe(value => {
      this.id = +value.id
      this.movieService.getMovieID(this.id).subscribe(value1 => {
        this.movie = value1
        this.genres=value1.genres
      })
    })
    this.movieService.getVideo(this.id).subscribe(value1 => {
      this.video = value1
      this.videoUrl=this.video.results[0].key
      this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + this.videoUrl;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    })


  }

  ngOnInit(): void {
  }

  background(url: string) {
    return (`background-image: url(https://image.tmdb.org/t/p/original${url})`)
  }

  videoI(key:string) {
    return this.sanitizer.bypassSecurityTrustUrl(`https://www.youtube.com/embed/${key}`)
  }

  stop(){
    return this.likes.find((value:any)=>value.id ===this.id)
  }

  addlike(movie:object) {
    this.likes.push(movie)
    localStorage.setItem('like',JSON.stringify(this.likes))
  }
}
