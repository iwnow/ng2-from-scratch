import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './ws.component'; 

const routes: Route[] = [
	{ path: '', pathMatch: 'full', component: WorkspaceComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class WorkspaceRouterModule {}