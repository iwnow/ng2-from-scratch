import { Component } from '@angular/core';

@Component({
	template: `
		<div>ProductsComponent</div>
		<span *ngFor="let a of test">{{a}}</span>
	`
})
export class ProductsComponent {
	test = [1,2,3,4,5];
}