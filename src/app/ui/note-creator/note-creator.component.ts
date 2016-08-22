import {Component, Output, EventEmitter} from '@angular/core';
import {ColorPickerComponent} from "../color-picker/color-picker.component";

@Component({
  selector:'note-creator',
  styleUrls: [
    'note-creator.style.css'
  ],
  templateUrl: 'note-creator.template.html',
  directives:[ColorPickerComponent],
})

export class NoteCreatorComponent{

  @Output() createNote = new EventEmitter();

  newNote={
    title:"",value:"",color:"white"
  };

  colors: Array<string> = [
    'rgb(255, 138, 128)',
    'rgb(255, 209, 128)',
    'rgb(255, 255, 141)',
    'rgb(207, 216, 220)',
    'rgb(128, 216, 255)',
    'rgb(167, 255, 235)',
    'rgb(204, 255, 144)'
  ];

  fullForm:boolean = false;

  onCreateNote(){
    const {title,value,color} = this.newNote;

    if(title && value){
      this.createNote.emit({title,value,color});
      this.reset();
      this.toggle(false);
    }
  }

  reset(){
    this.newNote={
      title:"",value:"",color:"white"
    };
  }

  toggle(value:boolean){
    this.fullForm = value;
  }

  onColorSelect(color:string){
    this.newNote.color = color;
  }

}
