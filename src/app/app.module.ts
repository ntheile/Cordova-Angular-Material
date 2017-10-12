import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatIconModule,
  MatButtonModule,
  MatCheckbox,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
