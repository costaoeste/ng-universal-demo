import {User} from "../user";
import {FollowersService} from "../followers.service";
import {OnInit, Component} from "@angular/core";

@Component({
  selector: 'git-followers',
  templateUrl: 'followers.template.html',
  styleUrls: [
    'followers.style.css'
  ],
})

export class ListFollowersComponent implements OnInit{

  private _username:string;
  isLoading:boolean;
  followers:User[];

  constructor(private _postService:FollowersService){
      this.isLoading=true;
      this._username = "gdi2290";
  }

   ngOnInit(){
    this._loadData();
  }

  private _loadData(){
    this._postService.getFollowers(this._username).subscribe(
      followers => {
        this.followers = followers;
        this.isLoading = false;
      },
      error => {
        console.error(error);
      }
    )
  }



}
