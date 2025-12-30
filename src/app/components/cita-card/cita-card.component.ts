import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cita } from '../../models/cita.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cita-card',
  templateUrl: './cita-card.component.html',
  styleUrls: ['./cita-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CitaCardComponent  implements OnInit {

  //recibe la info desde la pagina padre
  @Input() cita!: Cita;
  @Input() puedeBorrar: boolean = true

  @Output() borrarCita = new EventEmitter<void>();

  /*notificarBorrado(){
    this.borrarCita.emit();
  }*/

  constructor() { }

  ngOnInit() {}
  
  onEliminar() {
  this.borrarCita.emit();
}

}
