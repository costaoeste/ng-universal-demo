import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector:'note-creator',
  styleUrls: [
    'note-creator.style.css'
  ],
  templateUrl: 'note-creator.template.html'
})

export class NoteCreatorComponent{

  @Output() createNote = new EventEmitter();

  newNote={
    title:"",value:""
  };

  fullForm:boolean = false;

  onCreateNote(){
    const {title,value} = this.newNote;

    if(title && value){
      this.createNote.emit({title,value});
      this.reset();
    }
  }

  reset(){
    this.newNote={
      title:"",value:""
    };
  }

  toggle(value:boolean){
    this.fullForm = value;
  }

}
