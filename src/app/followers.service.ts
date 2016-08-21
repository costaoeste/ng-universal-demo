import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from "./model/user";

@Injectable()
export class FollowersService{

  private _urlUser = "https://api.github.com/users/"

  constructor(private _http: Http){

  }

  getFollowers(username):Observable<User[]>{
    return this._http.get(this._urlUser + username + "/followers")
      .map(res=>res.json());
  }

  getUser(username):Observable<User>{
    return this._http.get(this._urlUser + username)
      .map(res=> res.json());
  }

}
