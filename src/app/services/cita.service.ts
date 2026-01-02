import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private listaCitas: Cita[] = [];
  private autoId = 1;

  constructor() {
    // Opcional: algunas citas de ejemplo
    this.listaCitas = [
      { id: this.autoId++, frase: 'La vida es bella', autor: 'Anónimo' },
      { id: this.autoId++, frase: 'El conocimiento es poder', autor: 'Francis Bacon' },
      { id: this.autoId++, frase: 'Carpe diem', autor: 'Horacio' },
    ];
  }

  async getCitas(): Promise<Cita[]> {
    return [...this.listaCitas];
  }

  async agregarCita(cita: Cita): Promise<void> {
    cita.id = this.autoId++;
    this.listaCitas.push(cita);
  }

  async eliminarCita(id: number): Promise<void> {
    this.listaCitas = this.listaCitas.filter(c => c.id !== id);
  }

  async getCitaAleatoria(): Promise<Cita | null> {
    if (this.listaCitas.length === 0) {
      return null;
    }
    const indice = Math.floor(Math.random() * this.listaCitas.length);
    return this.listaCitas[indice];
  }
}



