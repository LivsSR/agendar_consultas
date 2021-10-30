import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// o que estou add// 
import { FormularioComponent } from '../formulario/formulario.component';

import { AgendarConsultaPageRoutingModule } from './agendar-consulta-routing.module';

import { AgendarConsultaPage } from './agendar-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarConsultaPageRoutingModule
  ],
  declarations: [AgendarConsultaPage, FormularioComponent]
})
export class AgendarConsultaPageModule {}
