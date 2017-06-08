import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.scss']
})
export class WorkspaceComponent { 

	constructor(
		private _router: Router
	){}

	test() {
		this._router.navigate(['/wss']);
	}
}
