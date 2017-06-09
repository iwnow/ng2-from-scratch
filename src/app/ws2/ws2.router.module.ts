import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { Ws2Component } from './ws2.component';

const routes: Route[] = [
	{ 
		path: '', 
		component: Ws2Component
	}
];

@NgModule({
	imports: [ 
		RouterModule.forChild(routes) 
	],
	exports: [
		RouterModule
	]
})
export class Ws2RouterModule {}