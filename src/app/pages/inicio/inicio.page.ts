import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// 1. Importaciones EXPLÍCITAS de Ionic 
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonIcon, 
  IonLabel, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonFab, 
  IonFabButton 
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { settingsOutline, addOutline, trashOutline } from 'ionicons/icons';

import { CitaService } from '../../services/cita.service';
import { Cita } from '../../models/cita.model';
import { ConfiguracionService } from '../../services/configuracion';
import { CitaCardComponent } from '../../components/cita-card/cita-card.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  // 2. Aquí se defe qué usa la vista
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CitaCardComponent,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonIcon, 
    IonLabel, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonFab, 
    IonFabButton
  ]
})
export class InicioPage implements OnInit {
  citaAleatoria: Cita | null = null; // Inicializar en null
  puedeBorrarEnInicio: boolean = false;

  constructor(
    private citaService: CitaService,
    private configService: ConfiguracionService
  ) {
    // registra los iconos
    addIcons({ settingsOutline, addOutline, trashOutline });
  }

  async ngOnInit() {
    this.citaAleatoria = await this.citaService.getCitaAleatoria();
    console.log('citaAleatoria (Android):', this.citaAleatoria);
  }

  async ionViewWillEnter() {
    this.citaAleatoria = await this.citaService.getCitaAleatoria();
    this.puedeBorrarEnInicio = await this.configService.obtenerConfiguracionBorrado();
  }

  async eliminarCita() {
    if (!this.puedeBorrarEnInicio) return;

    if (this.citaAleatoria && this.citaAleatoria.id) {
      await this.citaService.eliminarCita(this.citaAleatoria.id);
      this.citaAleatoria = await this.citaService.getCitaAleatoria();
    }
  }
}

