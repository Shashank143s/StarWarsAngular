import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector:'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: [ './vehicles.component.css' ]
})

export class VehiclesComponent{
  vehicles =[];
  subscription;
  dataAvailable:Boolean = true;
  swService:StarWarsService;
  constructor(swService:StarWarsService){
    this.swService = swService;
  }

    ngOnInit(){ 
      this.subscription = this.swService.fetchVehicles().subscribe((data)=>{
      this.vehicles = data.results;
      this.dataAvailable = false;
      console.log('Call from ngOnInit of Planet Component'+ data.results);
    });
  }
}