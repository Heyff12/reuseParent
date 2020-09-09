import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {TheButtonComponent} from '@hey_ff/testbutton/the-button/the-button.component'
// import {TheButtonComponent} from 'btn'
import { TheButtonComponent} from 'btnUrl';

@NgModule({
  declarations: [AppComponent, TheButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
