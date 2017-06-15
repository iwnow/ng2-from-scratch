import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
		AppRouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
