import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector:'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: [ './starships.component.css' ]
})

export class StarshipsComponent{
  starships = [];
  subscription;
  dataAvailable:Boolean = true;
  swService:StarWarsService;
  constructor(swService:StarWarsService){
    this.swService = swService;
  }

    ngOnInit(){ 
      this.subscription = this.swService.fetchStarships().subscribe((data)=>{
      this.starships = data.results;
      this.dataAvailable = false;
      console.log('Call from ngOnInit of Planet Component'+ data.results);
    });
  }
}
