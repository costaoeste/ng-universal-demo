import {Component, OnInit} from '@angular/core';
import {NoteCardComponent} from "../../ui/note-card/note-card.component";
import {NoteCreatorComponent} from "../../ui/note-creator/note-creator.component";
import {NoteService} from "../../services/notes";


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

  notes = [];

  constructor(private noteService:NoteService){
    this.noteService.getNotes().subscribe(res => this.notes = res.data);
  }

  ngOnInit() {
  }

  onNoteChecked(note,index){
    this.noteService.completeNote(note).subscribe(note => {
      const i = this.notes.findIndex(localNote => localNote.id === note.id);
      this.notes.splice(index,1);

    })
  }

  onCreateNote(note){
    this.noteService.createNote(note).subscribe(note => this.notes.push(note));
  }

}
