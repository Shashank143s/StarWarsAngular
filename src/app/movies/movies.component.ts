import { Component, OnInit, OnDestroy } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector:'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: [ './movies.component.css' ]
})

export class MoviesComponent implements OnInit,OnDestroy {
  movies = [];
  subscription;
  dataAvailable:Boolean = true;
  swService:StarWarsService;

  constructor(swService:StarWarsService){
    this.swService = swService;
  }

  ngOnInit(){ 
      this.subscription = this.swService.fetchMovies().subscribe((data)=>{
      this.movies = data.results;
      this.dataAvailable = false;
      console.log('Call from ngOnInit of Movies Component'+data.results);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}