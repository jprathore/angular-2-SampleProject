import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './Components/pages/home.component';
import {AboutComponent} from './Components/pages/about.component';
import {ContactComponent} from './Components/pages/contact.component';


const appRoutes : Routes = [
{
	path :'',
	component :HomeComponent
},
{
	path :'about',
	component :AboutComponent
},
{
	path :'contact',
	component :ContactComponent
}
];

export const routing :ModuleWithProviders = RouterModule.forRoot(appRoutes);

