import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'agendar-consulta', //adicionar o caminho da pasta filha no arquivo routing.module da pasta mãe, e adicionar .. no import
        loadChildren: () => import('../agendar-consulta/agendar-consulta.module').then( m => m.AgendarConsultaPageModule)
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
