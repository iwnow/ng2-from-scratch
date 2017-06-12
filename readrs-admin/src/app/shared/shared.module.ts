import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { NAVBLOCK_DECLARATION } from './nav-block';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule
	],
	declarations: [
		NAVBLOCK_DECLARATION
	],
	exports: [
		CommonModule,
		MaterialModule,
		NAVBLOCK_DECLARATION
	]
})
export class SharedModule {}