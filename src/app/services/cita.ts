import { Injectable } from '@angular/core';
import { Cita, Cita as CitaModel } from '../models/cita.model';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  //datos harcodeados para la fase inicial
  private listaCitas: Cita[] = [
    { id: 1, frase: 'La vida es bella', autor: 'Anónimo' },
    { id: 2, frase: 'El conocimiento es poder', autor: 'Francis Bacon' },
    { id: 3, frase: 'Carpe diem', autor: 'Horacio' },
  ];

  constructor() {}

  getCitas(): Cita[] {
    //return this._cita;
    return this.listaCitas;;
  }


  agregarCita(nuevaCita: Cita){
    nuevaCita.id = Date.now();
    this.listaCitas.push(nuevaCita);
  }

  eliminarCitas(id: number){
    this.listaCitas = this.listaCitas.filter(C => C.id !== id)
  }

  getCitaAleatoria():Cita {
    const indice = Math.floor(Math.random() * this.listaCitas.length);
    return this.listaCitas[indice];
  }
}
