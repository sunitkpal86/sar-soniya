import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { CeoDetails } from './components/ceo-details/ceo-details';
import { Services } from './components/services/services';
import { Customer } from './components/customer/customer';
import { Career } from './components/career/career';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    { path : 'ceo', component: CeoDetails},
    { path: 'services', component: Services},
    { path: 'customers', component: Customer},
    { path: 'career', component: Career},
    { path: 'gallery', component: Gallery},
    { path: 'contact', component: Contact},

];
