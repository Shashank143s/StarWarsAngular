import { Component,Input, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.css' ]
})

export class ModalComponent{
  @Input() modal ;
  @Output() closeBtnEvnt = new EventEmitter();
    
  constructor(){}
  closeButton(){
    this.closeBtnEvnt.emit(true);
  }
}