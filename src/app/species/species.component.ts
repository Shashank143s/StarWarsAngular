import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector:'app-species',
  templateUrl: './species.component.html',
  styleUrls: [ './species.component.css' ]
})

export class SpeciesComponent{
  species = [];
  subscription;  
  dataAvailable:Boolean = true;
  swService:StarWarsService;
  constructor(swService:StarWarsService){
    this.swService = swService;
  }

    ngOnInit(){ 
      this.subscription = this.swService.fetchSpecies().subscribe((data)=>{
      this.species = data.results;
      this.dataAvailable = false;
      console.log('Call from ngOnInit of Planet Component'+ data.results);
    });
  }
}