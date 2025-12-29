import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CitaService } from '../../services/cita';
import { Cita } from '../../models/cita.model';
import { RouterModule } from '@angular/router';
import { ConfiguracionService } from '../../services/configuracion';  
import { CitaCardComponent } from '../../components/cita-card/cita-card.component';
import { addIcons } from 'ionicons'; // Para registrar iconos
import { settingsOutline, addOutline, trashOutline } from 'ionicons/icons';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonicModule, // Usa solo este para evitar duplicados
    CommonModule, 
    FormsModule, 
    CitaCardComponent,
    RouterModule
  ]
})
export class InicioPage implements OnInit {
  citaAleatoria!:Cita;
  puedeBorrarEnInicio: boolean = false;

  constructor(
    private citaService: CitaService,
    private configService: ConfiguracionService
  ) { 
    addIcons({ settingsOutline, addOutline, trashOutline})
  }

  ngOnInit() {
    this.citaAleatoria = this.citaService.getCitaAleatoria();
  }

  async ionViewWillEnter() {
    // Carga inicial de datos aleatorios [cite: 103]
    this.citaAleatoria = this.citaService.getCitaAleatoria();
    // Recuperar persistencia de preferencias [cite: 132]
    this.puedeBorrarEnInicio = await this.configService.obtenerConfiguracionBorrado();
  }

  eliminarCita() {
    // Lógica para el evento @Output [cite: 114, 152]
    this.citaAleatoria = this.citaService.getCitaAleatoria();
  }
}
