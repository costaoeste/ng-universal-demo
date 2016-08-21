import {Component, OnInit} from '@angular/core';
import {FollowersService} from "../../backend/followers.service";
import {User} from "../../models/user";
import {App} from "../app.component";

@Component({
  moduleId: __filename,
  selector: 'home',
  styleUrls: [
    'home.style.css'
  ],
  templateUrl: 'home.template.html',
  providers:[FollowersService,App]

})
export class Home implements OnInit{

  private _username;
  user:User;
  isLoading:boolean;

  constructor(private _followersService:FollowersService){

    this._username = "octocat";
    this.isLoading = true;
  }
  private _loadData() {
    this._followersService.getUser(this._username).subscribe(
      user => {
        this.user=user;
        this.isLoading=false;
      },
      error =>{
        console.error(error);
      });
  }

  ngOnInit(){
    this._loadData();
  }

}
