/** ws - WorkSpace */
import { NgModule } from '@angular/core';

import { WorkspaceComponent } from './ws.component';
import { WorkspaceRouterModule } from './ws.router.module'; 
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		WorkspaceRouterModule
	],
	declarations: [
		WorkspaceComponent
	]
})
export class WorkspaceModule { }