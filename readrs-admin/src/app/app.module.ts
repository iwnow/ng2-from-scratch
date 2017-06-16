import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Page404Component } from './pages';
import { AppRouterModule } from './app.router.module';

import { WorkspaceModule } from './ws/ws.module';

@NgModule({
	declarations: [
		AppComponent,
		Page404Component
	],
	imports: [
		BrowserAnimationsModule,
		WorkspaceModule,
		AppRouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
