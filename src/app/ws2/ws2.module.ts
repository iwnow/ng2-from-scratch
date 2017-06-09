import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Ws2Component } from './ws2.component';
import { Ws2RouterModule } from './ws2.router.module';

@NgModule({
	imports: [
		Ws2RouterModule
	],
	exports: [],
	declarations: [
		Ws2Component
	]
})
export class Ws2Module { }