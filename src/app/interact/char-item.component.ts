import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-char-item',
  template:`
        <div class="list-group-item list-group-item-action flex-column align-items-start" (click)="raiseAlert()">
      <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{char.name}}</h5>
    </div>
    <div style="text-align:right; width:100%">
      <div style="display:inline-block;">
      <p class="mb-1"><em>Gender:</em> {{char.gender}}</p>
      <p class="mb-1"><em>Birth Year:</em> {{char.birth_year}}</p>
      </div>
      
      <div style="display:inline-block;">
      <p class="mb-1"><em>Height:</em> {{char.height}}</p>
      <p class="mb-1"><em>Mass:</em> {{char.mass}}</p>
      </div>
      <br>
    </div>
    </div>
  `,
  styles:[]
})

export class CharItemComponent implements OnInit {
  @Input() char;
  @Output() clickEvntRaised = new EventEmitter();

  raiseAlert(){
      this.clickEvntRaised.emit(this.char.name);
    }

  ngOnInit(){
    
  }

}