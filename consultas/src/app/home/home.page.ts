import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public alertController: AlertController;

    constructor(alert: AlertController) {
    this.alertController = alert;
  }

  
  async presentAlert(): Promise<void> {
      const alerta = await this.alertController.create({
      header: 'Não há pokemons cadastrados',
      message: 'Você precisa cadastrar ao menos um pokémon para agendar uma consulta',
      buttons: ['OK']
    });

    alerta.present();
  }
}
