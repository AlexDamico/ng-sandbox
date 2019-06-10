import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './home/home.component';
import { MarqueeComponent } from './castles/marquee/marquee.component';
import { TruncateComponent } from './castles/truncate/truncate.component';
import { DropdownComponent } from './castles/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarqueeComponent,
    TruncateComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
