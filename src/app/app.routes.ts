import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { DetalhesImoveis } from './pages/imoveis/detalhes-imoveis/detalhes-imoveis';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'imovel/:id',
    component: DetalhesImoveis
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];