import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutmeComponent } from './aboutme-component/aboutme-component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'aboutme', component: AboutmeComponent}
];
