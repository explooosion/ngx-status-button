import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxStatusButtonModule } from '../../../dist';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStatusButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
