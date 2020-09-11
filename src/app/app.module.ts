import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {TheButtonComponent} from '@hey_ff/testbutton/the-button/the-button.component'
// import {TheButtonComponent} from 'btn'
import { TheButtonComponent } from 'btnUrl';
// import { MyTheButtonComponent, MyLibComponent } from '@hey_ff/my-lib';
// import { MyLibModule } from '@hey_ff/my-lib';
import { MyLibModule } from 'reuse';

@NgModule({
  declarations: [AppComponent, TheButtonComponent],
  imports: [BrowserModule, AppRoutingModule, MyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
