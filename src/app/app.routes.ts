import { Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent} from './footer/footer.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'about', component: AboutComponent},
{path: 'service', component: ServiceComponent},
{path: 'footer', component: FooterComponent },
];
