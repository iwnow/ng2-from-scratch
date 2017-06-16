import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './ws.component'; 

const routes: Route[] = [
	{ 
		path: 'ws', 
		component: WorkspaceComponent,
		children: [
			{
				path: 'products',
				loadChildren: './products/products.module#ProductsModule'
			}
		]
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
export class WorkspaceRouterModule {}