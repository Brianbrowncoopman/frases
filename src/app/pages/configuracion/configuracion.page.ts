import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfiguracionService } from 'src/app/services/configuracion';

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
    this.permiteBorrar = await this.configService.obtenerConfiguracionBorrado();
  }

  async actualizarAjuste() {
    await this.configService.guardarConfiguracionBorrado(this.permiteBorrar);
  }
}

