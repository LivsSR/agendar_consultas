import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  public nome: string;
  public especie: string;
  public especialidade: string;
  public data: Date;
  public horario: string;
  public observacoes: string;

  constructor() { }

  ngOnInit() {}

}
