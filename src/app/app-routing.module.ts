import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CardComponent } from './castles/card/card.component';
import { CounterComponent } from './castles/counter/counter.component';
import { DropdownComponent } from './castles/dropdown/dropdown.component';
import { MarqueeComponent } from './castles/marquee/marquee.component';
import { TruncateComponent } from './castles/truncate/truncate.component';


// Route components
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'marquee', component: MarqueeComponent },
  { path: 'truncate', component: TruncateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
