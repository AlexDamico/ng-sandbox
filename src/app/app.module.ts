import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './home/home.component';
import { MarqueeComponent } from './castles/marquee/marquee.component';
import { TimelineComponent } from './castles/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarqueeComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
