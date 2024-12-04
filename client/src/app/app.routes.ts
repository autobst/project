import { Routes } from '@angular/router';

import { BuyComponent } from './components/buy/buy.component';

export const routes: Routes = [
  { path: '', component: BuyComponent },
  { path: '**', redirectTo: '/' },
];
