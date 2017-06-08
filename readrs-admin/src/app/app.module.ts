import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { Page404Component } from './pages';
import { AppRouterModule } from './app.router.module';

@NgModule({
	declarations: [
		AppComponent,
		Page404Component
	],
	imports: [
		BrowserAnimationsModule,
		MaterialModule,
		AppRouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
