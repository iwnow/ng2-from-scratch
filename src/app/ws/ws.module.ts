import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WsComponent } from './ws.component';
import { WsRouterModule } from './ws.router.module';

import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
	imports: [
		WsRouterModule,
		SharedModule
	],
	exports: [],
	declarations: [
		WsComponent,
		OrdersComponent,
		ProductsComponent
	]
})
export class WsModule { }