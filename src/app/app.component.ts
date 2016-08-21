import {Component, Directive, ElementRef, Renderer, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';


// templateUrl example
import { Home } from './home';
import {ListFollowersComponent} from "./followers/followers.component";
import {FollowersService} from "./followers.service";
import {NavBarComponent} from "./ui/navbar/navbar.component";
//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

/////////////////////////
// ** Example Components
@Component({
  selector: 'about',
  template: `
        <git-followers></git-followers>
  `,
  directives:[ListFollowersComponent],
  providers:[FollowersService]
})
export class About {


}

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge,
    NavBarComponent
  ],
  styles: [`
   
  `],
  template: `
  <navbar></navbar>

  <div class="container">
    <div class="inner-hero">
      <div>
        <span x-large>Universal JavaScript {{ title }}!</span>
      </div>
  
      Two-way binding: <input type="text" [value]="title" (input)="title = $event.target.value" autofocus>
      <br><br>

      <strong>Async data call return value:</strong>
      <pre>{{ data | json }}</pre>

      <strong>Router-outlet:</strong>
      <main>
        <router-outlet></router-outlet>
      </main>

      <blockquote>{{ server }}</blockquote>
      
      <ul>
          <li>
            <a [routerLinkActive]="['active', 'router-link-active']" [routerLink]=" ['./explore/',3]  ">Explore 3</a>
          </li>
          
          <li>
            <a [routerLinkActive]="['active', 'router-link-active']" [routerLink]=" ['./explore/',2]  ">Explore 2</a>
          </li>
      </ul>
      
    </div>
  </div>
  `
})
export class App {
  title: string = 'Pablo';
  data = {};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() {
    // limit the use of setTimeouts
    setTimeout(() => {
      this.server = 'This was rendered from the server!';
    }, 10);

    // use services for http calls
    this.http.get('/data.json')
      .subscribe(res => {
        this.data = res.json();
        console.log(this.data);
      });
  }

}

