import {Component, OnInit} from '@angular/core';
import {NoteCardComponent} from "../../ui/note-card/note-card.component";


@Component({
  moduleId: __filename,
  selector: 'notes-container',
  styleUrls: [
    'notes.style.css'
  ],
  templateUrl: 'notes.template.html',
  directives:[NoteCardComponent]
})
export class Notes implements OnInit{

  constructor(){

  }

  ngOnInit() {
  }

}
