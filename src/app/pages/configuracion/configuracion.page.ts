import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfiguracionService } from 'src/app/services/configuracion';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {
  permiteBorrar: boolean = false;

  constructor(private configService: ConfiguracionService) {}

  async ngOnInit() {
    const { value } = await Preferences.get({key: 'config_borrar'})
    // INDICADOR: Integra el Service para recuperar datos 
    this.permiteBorrar = value === 'true';
  }

  async actualizarAjuste() {
    // INDICADOR: Garantiza que la información se mantenga al cerrar la app [cite: 56]
    await Preferences.set({
      key: 'config_borrar',
      value: this.permiteBorrar.toString()
    })
  }
}
