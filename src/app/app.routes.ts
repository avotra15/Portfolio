import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Work } from './work/work';
import { Skills } from './skills/skills';
import { Aboutme } from './aboutme/aboutme';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path: '', component: Home},    
    {path: 'work', component: Work},
    {path: 'skills', component: Skills},
    {path: 'aboutme', component: Aboutme},
    {path: 'contact', component: Contact},
];