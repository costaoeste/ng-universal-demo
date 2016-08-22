import {OnInit, Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'color-picker',
  templateUrl: 'color-picker.template.html',
  styleUrls: [
    'color-picker.style.css'
  ],
})

export class ColorPickerComponent implements OnInit{

  @Input() colors: Array<string> = [];

  @Output() selected = new EventEmitter();

  isSelectorVisible:boolean = false;

  showSelector(value:boolean){
    this.isSelectorVisible=value;
  }

  constructor(){
  }

  ngOnInit(){
  }

  selectColor(color){
    this.showSelector(false);
    this.selected.emit(color);
  }

}
