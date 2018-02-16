import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { AuthHttp,tokenNotExpired } from 'angular2-jwt';
import { LogService } from './log.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService{
  private characters = [
    { name : 'Luke Skywalker' , side : '' },
    { name : 'Darth Vader' , side : '' }
  ]


  //Variables to trigger Events
  changedCharac = new Subject<Array<{}>>();
  changedMovies = new Subject<Array<{}>>();


  constructor(private logService:LogService ,private http:Http, private authHttp:AuthHttp){
    this.logService = logService;
    this.http = http;
    this.authHttp = authHttp;
  }

  login(credentials) : Observable<any>{
    console.log('In service: '+ credentials);
    return this.http.post('http://localhost:3000/auth', credentials).map((response:Response)=>{
      return response.json();
    });
  }

  tokenValidity():Boolean{
    return tokenNotExpired();
  }

  fetchCharacters(){
    this.http.get('https://swapi.co/api/people/').map((response:Response)=>{
    return response.json();
    }).subscribe((data)=>{
      console.log(data.results);
      this.characters = data.results;
      this.changedCharac.next(this.characters);
    }); 
  }

  fetchCharacter(): Observable<any>{
    return this.authHttp.get('http://localhost:3000/characters').map((response:Response)=>{
      return response.json();
    });
  } 

  fetchMovies(): Observable<any>{
    return this.http.get('https://swapi.co/api/films/').map((response:Response)=>{
      return response.json();
    }); 
  }

  fetchPlanets(): Observable<any>{
    return this.http.get('https://swapi.co/api/planets/').map((response:Response)=>{
      return response.json();
    });
  }

  fetchSpecies(): Observable<any>{
        return this.http.get('https://swapi.co/api/species/').map((response:Response)=>{
      return response.json();
    });
  }

  fetchStarships(): Observable<any>{
        return this.http.get('https://swapi.co/api/starships/').map((response:Response)=>{
      return response.json();
    });
  }

  fetchVehicles(): Observable<any>{
        return this.http.get('https://swapi.co/api/vehicles/').map((response:Response)=>{
      return response.json();
    });
  }

  //Functionality to fetch the characters according to the filter condition
  getCharacters(chosenSide){
    if(chosenSide === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((data)=>{
        return data.side == chosenSide;
    });
  }

  //the functionality to toggle the Character's Side
  //Click on the Dark/Light side button to switch the    //character to that side.
  onSideChosen(charinfo){
    const pos = this.characters.findIndex((char)=>{
      return char.name === charinfo.name;
    });
    this.characters[pos].side = charinfo.side;
    this.changedCharac.next();
    this.logService.writeLog(this.characters[pos].side = charinfo.side);
  }

  //Adds a character
  addCharacter(name,side){
    var pos = this.characters.findIndex((data)=>{
      return data.name === name;
    })
    if(pos !== -1){
      return;
    }
    else{
      this.characters.push({name:name,side:side});
    }
    
  }
}