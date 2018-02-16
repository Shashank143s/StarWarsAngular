import { Component, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: [ './create-character.component.css' ]
})

export class CreateCharacterComponent  {
  allSides = [
    { option: 'None' , value: 'none'},
    { option: 'Dark' , value: 'dark'},
    { option: 'Light' , value: 'light'} 
  ];
  
  selectedSide = this.allSides[0];
  swService:StarWarsService;

  constructor(swService:StarWarsService){
    this.swService = swService;
  }

  formSubmit(submittedValues){
    //console.log(submittedValues.value);
    this.swService.addCharacter(submittedValues.value.name,submittedValues.value.side);
  }

  notifyMe(){
    if (!Notification) {
      alert('Desktop notifications not available in your Browser.');
      return;
    }
    Notification.requestPermission();
      var notification = new Notification('New Notification', {
        icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
        body: "Hey there! You've been notified!"
      });
  
      notification.onclick = function () {
        window.open("http://stackoverflow.com/a/13328397/1269037");
      };
      console.log(notification);
  }
}