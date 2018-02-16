import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-char-list',
  template: `
  <div class="col-md-4 offset-md-5 padT" *ngIf="dataAvailable">
  <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
</div>
  <app-char-item *ngFor="let character of characters" [char]="character" (clickEvntRaised)="Alert($event)"></app-char-item>
`,
  styles: ['']
})

export class CharListComponent  {
  characters = [];
  activatedRoute:ActivatedRoute;
  swService:StarWarsService;
  dataAvailable:Boolean=true;

  constructor(activatedRoute:ActivatedRoute,swService:StarWarsService){
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  Alert(eve){
      alert(eve);
    }
    
  ngOnInit(){
    this.activatedRoute.params.subscribe((param)=>{
      //search using the param for those characters
      this.swService.fetchCharacter().subscribe((data)=>{
        console.log(data);
        this.characters=[];
        for(var i=0; i<data.results.length; i++){
          console.log(data.results[i].gender);
          if(data.results[i].gender === param.gender){
            console.log(data.results[i].gender);
            this.characters.push(data.results[i]);
            // console.log(data.results[i].gender);
            // console.log('CHaracter'+this.characters);
          }
        }
        this.dataAvailable = false;
    }); 
    });
    //Write logic to fetch the URL parameter and search using this the characters and then save it in the array and display in 

  }
}