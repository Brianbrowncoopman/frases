import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CitaService } from '../../services/cita.service';
import { Cita } from '../../models/cita.model';
import { RouterModule } from '@angular/router';
import { ConfiguracionService } from '../../services/configuracion';
import { CitaCardComponent } from '../../components/cita-card/cita-card.component';
import { addIcons } from 'ionicons';
import { settingsOutline, addOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CitaCardComponent,
    RouterModule,
  ]
})
export class InicioPage implements OnInit {
  citaAleatoria!: Cita | null;
  puedeBorrarEnInicio: boolean = false;

  constructor(
    private citaService: CitaService,
    private configService: ConfiguracionService
  ) {
    addIcons({ settingsOutline, addOutline, trashOutline });
  }

  async ngOnInit() {
    this.citaAleatoria = await this.citaService.getCitaAleatoria();
  }

  async ionViewWillEnter() {
    this.citaAleatoria = await this.citaService.getCitaAleatoria();
    this.puedeBorrarEnInicio = await this.configService.obtenerConfiguracionBorrado();
  }

  async eliminarCita() {
    if (!this.puedeBorrarEnInicio) {
      return;
    }

    if (this.citaAleatoria && this.citaAleatoria.id) {
      await this.citaService.eliminarCita(this.citaAleatoria.id);
      this.citaAleatoria = await this.citaService.getCitaAleatoria();
    }
  }
}

