import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { WoodburningDetailComponent } from './woodburning-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    WoodburningDetailComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule { }
