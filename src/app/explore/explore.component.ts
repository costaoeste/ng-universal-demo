import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  moduleId: __filename,
  selector: 'explore',
  templateUrl: 'explore.template.html'
})

export class Explore implements OnInit{


  private _route;
  private _param:number;
  public paramName: Observable<string>;

  constructor(private route: ActivatedRoute){
   this._route=route;
  }

  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._param = id;
      });
  }

}

