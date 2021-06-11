import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/Movie";
import {ResultsMovie} from "../models/ResultsMovie";
import {Video} from "../models/video";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private  movie='discover/movie'
  private baseUrl='https:/api.themoviedb.org/3/'
  private API_KEY = "?api_key=288bb0de612c607f61e04659a2cd2f04"
  private page = '&page='
  private language = "&language=uk"

  constructor(private httpClient: HttpClient) { }
  getMovie(page:number):Observable<Movie>{
    return this.httpClient.get<Movie>(this.baseUrl+this.movie+this.API_KEY+this.language+this.page+page)
  }
  getMovieID(id:number):Observable<ResultsMovie>{
    return this.httpClient.get<ResultsMovie>(`https://api.themoviedb.org/3/movie/${id}${this.API_KEY}`)
  }
  getVideo(id:number):Observable<Video>{
    return this.httpClient.get<Video>(this.baseUrl+'movie/'+id+'/videos'+this.API_KEY)
  }

  getPoplar():Observable<Movie>{
    return this.httpClient.get<Movie>(this.baseUrl+"movie/popular"+this.API_KEY+this.language+"&page=1")
  }
  getSearch(text:string):Observable<Movie>{
    return this.httpClient.get<Movie>(this.baseUrl+"search/movie"+this.API_KEY+"&query="+text)
  }

}
