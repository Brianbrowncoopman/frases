import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences'; // Línea 2

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private readonly KEY_BORRAR_INICIO = 'permite_borrar_inicio';

  constructor() { }

  // INDICADOR: Instala y codifica el uso del plugin de Preferencias 
  async guardarConfiguracionBorrado(valor: boolean) {
    await Preferences.set({
      key: this.KEY_BORRAR_INICIO,
      value: JSON.stringify(valor)
    });
  }

  async obtenerConfiguracionBorrado(): Promise<boolean> {
    const { value } = await Preferences.get({ key: this.KEY_BORRAR_INICIO });
    return value ? JSON.parse(value) : false;
  }
}
