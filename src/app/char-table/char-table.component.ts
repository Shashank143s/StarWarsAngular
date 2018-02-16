import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector : 'app-char-table',
  templateUrl: './char-table.component.html',
  styleUrls: [ './char-table.component.css' ]
})

export class CharTableComponent implements OnInit{
  data = [];
  data1 = [];
  dataAvailable:Boolean = true;
  swService:StarWarsService;
  activatedRoute:ActivatedRoute;
  colname:Array<String>;
  propname:Array<String>;

  constructor(swService:StarWarsService,activatedRoute:ActivatedRoute){
    this.swService = swService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(){

    this.swService.fetchVehicles().subscribe((data)=>{
        this.data1 = data.results;
        console.log(this.data1);
        this.dataAvailable = false;
      });

    this.activatedRoute.params.subscribe((param)=>{

      if(param.section === 'movies'){
          this.swService.fetchMovies().subscribe((data)=>{
            this.data = data.results;
            this.dataAvailable = false;
            this.colname = ['Title','Episode Id','Opening Crawl','Release Date'];
            this.propname = ['title','episode_id','opening_crawl','release_date'];
          });
          this.dataAvailable=false;
      } 
      else if(param.section === 'vehicles'){
          this.swService.fetchVehicles().subscribe((data)=>{
            this.data = data.results;
            this.data1 = data.results;
            this.dataAvailable = false;
            this.colname = ['Name','Model Id','Manufacturer','Passengers'];
            this.propname = ['name','model','manufacturer','manufacturer'];
          });
          this.dataAvailable=false;
      }
      else if(param.section === 'starships'){
          this.swService.fetchStarships().subscribe((data)=>{
            this.data = data.results;
            this.dataAvailable = false; 
          });
      }
      else if(param.section === 'species'){
          this.swService.fetchSpecies().subscribe((data)=>{
            this.data = data.results;
            this.dataAvailable = false; 
          });
      }
      else if(param.section === 'planets'){
          this.swService.fetchPlanets().subscribe((data)=>{
            this.data = data.results;
            this.dataAvailable = false; 
          });
      }
    });

    // this.swService.fetchVehicles().subscribe((data)=>{
    //   this.data = data.results;
    //   this.dataAvailable = false; 
    // });

  }

}