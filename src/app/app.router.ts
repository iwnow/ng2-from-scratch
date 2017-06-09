import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { Page404Component } from './pages';

const routes: Route[] = [
	{ path: '', redirectTo: 'ws', pathMatch: 'full' },
	{ path: 'ws', loadChildren: './ws/ws.module#WsModule' },
	{ path: 'ws2', loadChildren: './ws2/ws2.module#Ws2Module' },
	{ path: '**', component: Page404Component}
];

@NgModule({
	imports: [ 
		RouterModule.forRoot(routes) 
	],
	exports: [ 
		RouterModule
	]
})
export class AppRouterModule {}