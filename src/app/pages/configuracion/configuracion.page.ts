import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Importaciones  de Ionic Standalone
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonToggle, 
  IonButtons, 
  IonBackButton 
} from '@ionic/angular/standalone';
import { ConfiguracionService } from '../../services/configuracion';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonToggle, 
    IonButtons, 
    IonBackButton
  ]
})
export class ConfiguracionPage implements OnInit {
  permitirBorrar: boolean = false;

  constructor(private configService: ConfiguracionService) {}

  async ngOnInit() {
    this.permitirBorrar = await this.configService.obtenerConfiguracionBorrado();
  }

  async actualizarConfiguracion() {
    await this.configService.guardarConfiguracionBorrado(this.permitirBorrar);
  }
}
