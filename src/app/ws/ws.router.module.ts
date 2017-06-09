import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { WsComponent } from './ws.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Route[] = [
	{ 
		path: '', 
		component: WsComponent, 
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'products'
			},
			{
				path: 'orders',
				component: OrdersComponent
			},
			{
				path: 'products',
				component: ProductsComponent
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
export class WsRouterModule {}