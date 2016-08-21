import {Component, OnInit} from '@angular/core';
import {Account} from "../../account/account.component";
import {FollowersService} from "../../followers.service";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Notes} from "../notes/notes";

@Component({
  moduleId: __filename,
  selector: 'main-container',
  styleUrls: [
    'main.style.css'
  ],
  templateUrl: 'main.template.html',
  directives:[
    ...ROUTER_DIRECTIVES,
    Account,
    Notes
  ],
  providers:[FollowersService]
})
export class Main implements OnInit{

  constructor(){

  }

  ngOnInit() {
  }

}
