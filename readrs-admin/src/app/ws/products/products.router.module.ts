import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component'; 
//import { SignInComponent } from './signin/signin.component';
//import { LoginComponent } from './login/login.component';

const routes: Route[] = [
	{ 
		path: '', 
		component: ProductsComponent
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
export class ProductsRouterModule {}