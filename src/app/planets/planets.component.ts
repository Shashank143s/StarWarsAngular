import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector:'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: [ './planets.component.css' ]
})

export class PlanetsComponent{
  planets = [];
  subscription;
  dataAvailable:Boolean = true;
  swService:StarWarsService;
  constructor(swService:StarWarsService){
    this.swService = swService;
  }

  ngOnInit(){ 
      this.subscription = this.swService.fetchPlanets().subscribe((data)=>{
      this.planets = data.results;
      this.dataAvailable = false;
      console.log('Call from ngOnInit of Planet Component'+ data.results);
    });
  }
}