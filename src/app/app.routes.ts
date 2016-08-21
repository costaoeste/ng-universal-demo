import { RouterConfig } from '@angular/router';
import { About } from './app.component';
import {Explore} from "./ui/explore";
import {Account} from "./account/account.component";


export const routes: RouterConfig = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', component: Account },
  { path: 'followers', component: About },
  { path: 'explore/:id', component: Explore },
  { path: '**', redirectTo: './account' }
];
