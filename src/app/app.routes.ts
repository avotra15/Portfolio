import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Work } from './work/work';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'work', component: Work},
];