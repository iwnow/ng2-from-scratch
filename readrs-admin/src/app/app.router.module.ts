import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { Page404Component } from './pages';

const routes: Route[] = [
	{ path: '', redirectTo: 'ws', pathMatch: 'full' },
	{ path: 'ws', loadChildren: './ws/ws.module#WorkspaceModule' },
	{ path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
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