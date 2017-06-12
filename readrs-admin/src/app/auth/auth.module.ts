import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { AuthRouterModule } from './auth.router.module'; 
import { SharedModule } from '../shared/shared.module';

import { SignInComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
	imports: [
		SharedModule,
		AuthRouterModule
	],
	declarations: [
		AuthComponent,
		SignInComponent,
		LoginComponent
	]
})
export class AuthModule {}