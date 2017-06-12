import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component'; 
import { SignInComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
	{ 
		path: '', 
		component: AuthComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'signin',
				component: SignInComponent
			},
			{
				path: '',
				redirectTo: 'login'
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
export class AuthRouterModule {}