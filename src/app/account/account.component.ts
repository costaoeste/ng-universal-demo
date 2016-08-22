import {Component, OnInit} from '@angular/core';
import {FollowersService} from "../services/followers.service";
import {User} from "../model/user";

@Component({
  selector: 'account',
  styleUrls: [
    'account.style.css'
  ],
  templateUrl: 'account.template.html',
  providers:[FollowersService]

})
export class Account implements OnInit{

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
