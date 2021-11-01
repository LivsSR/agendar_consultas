import { Component, OnInit } from '@angular/core';
import { DadosConsultasService } from '../dados-consultas.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  public nome: string;
  public especie: string;
  public especialidade: string;
  public data: string;
  public horario: number;
  public observacoes: string;
  public servico: DadosConsultasService;

  constructor(servico: DadosConsultasService) { 
    this.servico = servico;
  }

  voltar(): void {
    window.history.back();
  }

  inserir(): void {
    this.servico.salvarConsulta({
      nome: this.nome,
      especie: this.especie,
      especialidade: this.especialidade,
      data: this.data,
      horario: this.horario,
      observacoes: this.observacoes
    });

    this.voltar();

    console.log(this.servico.consultas);
  }

  ngOnInit() {}

}
