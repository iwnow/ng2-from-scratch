import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { ProductsRouterModule } from './products.router.module'; 
//import { SharedModule } from '../../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
	imports: [
		//SharedModule,
		Ng2SmartTableModule,
		ProductsRouterModule
	],
	declarations: [
		ProductsComponent
	]
})
export class ProductsModule {}