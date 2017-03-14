import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }               from './app.component';
import { DashboardComponent }         from './dashboard.component';
import { WoodburningDetailComponent } from './woodburning-detail.component';
import { WoodburningsComponent }      from './woodburnings.component';
import { WoodburningService }         from './woodburning.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WoodburningDetailComponent,
    WoodburningsComponent
  ],
  providers: [WoodburningService],
  bootstrap: [AppComponent]
})

export class AppModule { }
