import { Injectable } from '@angular/core';
import { IConsulta } from './iconsulta';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DadosConsultasService {
  public consultas: IConsulta[] = [
   ]
  private storage;

  constructor(storage: Storage) { 
    this.storage = storage;
    this.storage.create().then(() => console.log('Armazenamento criado'));
    this.storage.get('consultas')
    .then(consultas => this.consultas.push(...consultas))
    .catch(() => this.storage.set('consultas', this.consultas));

  }

  buscarConsulta(): IConsulta[]{
    return this.consultas;

    }

    salvarConsulta(consulta: IConsulta): void {
      consulta.id = this.consultas.length + 1;
      this.consultas.push(consulta);
      this.storage.set('consultas', this.consultas);
      }
      
    }

