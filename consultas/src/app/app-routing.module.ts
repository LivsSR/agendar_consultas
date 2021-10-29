import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [ //array com os caminhos do app
  {
    path: 'home', //nome da pagina
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) //onde estão as pastas filhos dessa pagina home
  },
  {
    path: '', //para indicar a pagina em que o app abre
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'agendar-consulta',
    loadChildren: () => import('./agendar-consulta/agendar-consulta.module').then( m => m.AgendarConsultaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
