import {Component, OnInit} from '@angular/core';
import {NoteCardComponent} from "../../ui/note-card/note-card.component";
import {NoteCreatorComponent} from "../../ui/note-creator/note-creator.component";


@Component({
  moduleId: __filename,
  selector: 'notes-container',
  styleUrls: [
    'notes.style.css'
  ],
  templateUrl: 'notes.template.html',
  directives:[NoteCardComponent,NoteCreatorComponent]
})
export class Notes implements OnInit{

  notes = [
    {title:'new note',value:'note here',color:'seagreen'},
    {title:'new note',value:'note here',color:'lightblue'},
    {title:'new note',value:'note here',color:'seagreen'}

  ]

  constructor(){

  }

  ngOnInit() {
  }

  onNoteChecked(note,index){
    this.notes.splice(index,1);
  }

  onCreateNote(note){
    this.notes.push(note);
  }

}
