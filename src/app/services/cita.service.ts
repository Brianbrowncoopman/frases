import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';
import { DatabaseService } from './database.service';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private listaCitasMemoria: Cita[] = [];
  private autoId = 1;
  private esWeb = Capacitor.getPlatform() === 'web';

  constructor(private dbService: DatabaseService) {
    if (this.esWeb) {
      this.listaCitasMemoria = [
        { id: this.autoId++, frase: 'La vida es bella', autor: 'Anónimo' },
        { id: this.autoId++, frase: 'El conocimiento es poder', autor: 'Francis Bacon' },
        { id: this.autoId++, frase: 'Carpe diem', autor: 'Horacio' },
      ];
    }
  }

  async getCitas(): Promise<Cita[]> {//getcitas es asincrona
    if (this.esWeb) { // si es web retorna el listado de citas que esta en memoria
      return [...this.listaCitasMemoria];
    }

    const res = await this.dbService.obtenerDatos('SELECT * FROM citas');
    return res.values || [];
  }

  async agregarCita(cita: Cita): Promise<void> { // agragarCitas es asincrona 
    if (this.esWeb) { // si es web agraga la nueva cita con .push a cita
      cita.id = this.autoId++;
      this.listaCitasMemoria.push(cita);
      return;
    }

    const sql = 'INSERT INTO citas (frase, autor) VALUES (?, ?)';
    await this.dbService.ejecutarConsulta(sql, [cita.frase, cita.autor]);
  }

  async eliminarCita(id: number): Promise<void> { //eliminarCita es asincrona
    if (this.esWeb) {
      this.listaCitasMemoria = this.listaCitasMemoria.filter(c => c.id !== id);
      return;
    }

    const sql = 'DELETE FROM citas WHERE id = ?';
    await this.dbService.ejecutarConsulta(sql, [id]);
  }

  async getCitaAleatoria(): Promise<Cita | null> { ///trae una cita cualquiera
    if (this.esWeb) {
      if (this.listaCitasMemoria.length === 0) return null;
      const i = Math.floor(Math.random() * this.listaCitasMemoria.length);
      return this.listaCitasMemoria[i];
    }

    const sql = 'SELECT * FROM citas ORDER BY RANDOM() LIMIT 1';
    const res = await this.dbService.obtenerDatos(sql);
    return res.values && res.values.length > 0 ? res.values[0] : null;
  }
}




