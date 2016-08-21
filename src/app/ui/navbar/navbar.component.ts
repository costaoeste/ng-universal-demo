import {OnInit, Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.template.html',
  directives: [
    ROUTER_DIRECTIVES
    ]
})

export class NavBarComponent implements OnInit{

  constructor(){
  }

  ngOnInit(){
  }


}
