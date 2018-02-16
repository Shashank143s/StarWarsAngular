import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './star-wars.service';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit  {
  name = 'Angular 5';
  swService:StarWarsService;

  constructor(swService:StarWarsService){
    this.swService = swService;
  }

  ngOnInit(){
    this.swService.fetchCharacters(); 
  }
}
