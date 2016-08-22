import {OnInit, Component, Input, Output, EventEmitter} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  /*inputs:['note'],*/
  selector: 'note-card',
  styleUrls: [
    "note-card.style.css",
  ],
  templateUrl: 'note-card.template.html',
})

export class NoteCardComponent implements OnInit{


  @Output()checked = new EventEmitter();

  @Input('note') note = {}; //dos formas, anotacion o declararlo
  showCheck : boolean = false;

  constructor(){
  }

  ngOnInit(){
  }


  onChecked(){
    this.checked.emit(this.note);
  }

  toggle(){
    this.showCheck = !this.showCheck;
  }


}
