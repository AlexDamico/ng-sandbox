import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './home/home.component';
import { CardComponent } from './castles/card/card.component';
import { DropdownComponent } from './castles/dropdown/dropdown.component';
import { MarqueeComponent } from './castles/marquee/marquee.component';
import { TruncateComponent } from './castles/truncate/truncate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    DropdownComponent,
    MarqueeComponent,
    TruncateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
