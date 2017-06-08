/** ws - WorkSpace */
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WorkspaceComponent } from './ws.component';
import { WorkspaceRouterModule } from './ws.router.module'; 

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		WorkspaceRouterModule
	],
	declarations: [
		WorkspaceComponent
	]
})
export class WorkspaceModule { }