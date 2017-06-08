import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { Page404Component } from './pages';

const routes: Route[] = [
	{ path: '', redirectTo: 'ws', pathMatch: 'full' },
	{ path: 'ws', pathMatch: 'full', loadChildren: './ws/ws.module#WorkspaceModule' },
	{ path: 'login', pathMatch: 'full', loadChildren: './ws/ws.module#WorkspaceModule' },
	{ path: 'signin', pathMatch: 'full', loadChildren: './ws/ws.module#WorkspaceModule' },
	{ path: '**', component: Page404Component }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRouterModule { }