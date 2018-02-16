import { Component, OnInit, OnDestroy } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit, OnDestroy {
  characters=[];
  activatedRoute:ActivatedRoute;
  swService:StarWarsService;
  loadedSide ='all';
  subscription;

  constructor(activatedRoute:ActivatedRoute,swService:StarWarsService){
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(){ 
    this.activatedRoute.params.subscribe((param)=>{
      this.characters = this.swService.getCharacters(param.side);
      this.loadedSide = param.side;
    });
    this.subscription = this.swService.changedCharac.subscribe((param)=>{
      this.characters = this.swService.getCharacters(this.loadedSide);
    });
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}