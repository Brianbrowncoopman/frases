import { Injectable } from '@angular/core';
import { Cita, Cita as CitaModel } from '../models/cita.model';
import { DatabaseService } from './database.service';


@Injectable({
  providedIn: 'root',
})
export class CitaService {
  //datos harcodeados para la fase inicial
  /*private listaCitas: Cita[] = [
    { id: 1, frase: 'La vida es bella', autor: 'Anónimo' },
    { id: 2, frase: 'El conocimiento es poder', autor: 'Francis Bacon' },
    { id: 3, frase: 'Carpe diem', autor: 'Horacio' },
  ];*/
  constructor(private dbService: DatabaseService) {}
  /*getCitas(): Cita[] {
    //return this._cita;
    return this.listaCitas;;
  }*/
  async getCitas(): Promise<Cita[]> {
    const res = await this.dbService.obtenerDatos('SELECT * FROM citas');
    return  res.values || [];
  }
  /*agregarCita(nuevaCita: Cita){
    nuevaCita.id = Date.now();
    this.listaCitas.push(nuevaCita);
  }*/
  async agregarCita(cita: Cita){
    const sql = 'INSERT INTO citas (frase, autor) VALUES (?, ?)';
    await this.dbService.ejecutarConsulta(sql, [cita.frase, cita.autor]);
  }
  /*eliminarCitas(id: number){
    this.listaCitas = this.listaCitas.filter(C => C.id !== id)
  }*/
  async eliminarCita(id: number) {
    const sql = 'DELETE FEOM cita WHERE id = ?';
    await this.dbService.ejecutarConsulta(sql,[id]);
  }
  /*getCitaAleatoria():Cita {
    const indice = Math.floor(Math.random() * this.listaCitas.length);
    return this.listaCitas[indice];
  }*/
  async getCitaAleatoria(): Promise<Cita | null> {
    const sql = 'SELECT * FROM cita ORDER BY RANDOM() LIMIT 1';
    const res =  await this.dbService.obtenerDatos(sql);
    return res.values && res.values.length > 0 ? res.values[0] : null;
  }
}
export { Cita };

