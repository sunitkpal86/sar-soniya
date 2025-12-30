import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { CeoDetails } from './components/ceo-details/ceo-details';
import { Services } from './components/services/services';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    { path : 'ceo', component: CeoDetails},
    { path: 'services', component: Services}
];
