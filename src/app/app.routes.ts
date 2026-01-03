import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio', //ruta a la pagina de inicio
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'gestion', //ruta a la pagina de gestion
    loadComponent: () => import('./pages/gestion/gestion.page').then(m => m.GestionPage)
  },
  {
    path: 'configuracion', //ruta a la pagina de configuracion
    loadComponent: () => import('./pages/configuracion/configuracion.page').then(m => m.ConfiguracionPage)
  },
];

