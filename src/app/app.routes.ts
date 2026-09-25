import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { DetalhesImoveis } from './pages/imoveis/detalhes-imoveis/detalhes-imoveis';
import { CadastrarImoveis } from './pages/imoveis/cadastrar-imoveis/cadastrar-imoveis';
import { MeusImoveis } from './pages/meus-imoveis/meus-imoveis';
import { Corretor } from './pages/corretor/corretor';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },

  { path: 'login', component: Login },

  { path: 'imovel/:id', component: DetalhesImoveis },

  {
    path: 'cadastrar-imoveis',
    component: CadastrarImoveis,
    canActivate: [authGuard]
  },

  {
    path: 'meus-imoveis',
    component: MeusImoveis,
    canActivate: [authGuard]
  },

  {
    path: 'corretor',
    component: Corretor,
    canActivate: [authGuard]
  },

  { path: '**', redirectTo: 'home' }
];