import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router';
import { PAGES_DECLARATIONS } from './pages';

import { MaterialModule } from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    PAGES_DECLARATIONS
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
