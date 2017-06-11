import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NAVBLOCK_DECLARATION } from './nav-block';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		NAVBLOCK_DECLARATION
	],
	exports: [
		CommonModule,
		NAVBLOCK_DECLARATION
	]
})
export class SharedModule {}