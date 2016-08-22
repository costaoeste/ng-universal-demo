import {Http,Headers,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class ApiService{

  api_url:string = 'http://localhost:3500';

  headers : Headers = new Headers({
    'Content-Type':'application/json',
    'X-Parse-Application-Id': 'xxx',
    'X-Parse-REST-API-Key':'yyy',
    Accept: 'application/json'
  });

  private getJson(response:Response){
    return response.json;
  }

  private checkForError(response:Response):Response{
    if(response.status >= 200 && response.status>300){
      return response;
    }
    else{
      var error = new Error(response.statusText);
      error['response'] = response;
      console.error(error);
      throw error;
    }
  }

  get(path:string):Observable<any>{
    return this._http.get(`${this.api_url}${path}`,
      {headers:this.headers})
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  post(path:string,body):Observable<any>{
    return this._http.post(`${this.api_url}${path}`,
      JSON.stringify(body),

      {headers:this.headers})
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  delete(path:string):Observable<any>{
    return this._http.delete(`${this.api_url}${path}`,
      {headers:this.headers})
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }


  constructor(private _http:Http){}

  /*getUsers() {
    return this._http.get('https://api.parse.com/1/classes/Persons', {
      headers: this.headers
    }).map((response:any)=> {
      return response.json();
    })
      .map((users:any) => {
        let result:UserItem[] = [];
        if (users && users.results) {
          users.results.forEach((user)=> {
            result.push(new UserItem(user.objectId, user.FullName,
              user.Email, user.Address, user.Age));
          });
        }
        this._users = this._users.concat(result);
        return result;
      });
  }*/





}
