import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const usuarioLogado = localStorage.getItem('usuarioLogado');

  if (usuarioLogado === 'true') {
    return true;
  }

  return router.parseUrl('/login');
};