import { Routes } from '@angular/router';
import { AboutUs } from './components/about-us/about-us';
import { BlankLayout } from './layout/blank-layout/blank-layout';

export const routes: Routes = [
  {
    path: '',
    component: BlankLayout,
    title: 'Home'
  },
  {
    path: 'about-us',
    component: AboutUs,
    title: 'About us'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
