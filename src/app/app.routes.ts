import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { About } from './app.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', component: Home },
  { path: 'followers', component: About },
  { path: '**', redirectTo: 'account' }
];
