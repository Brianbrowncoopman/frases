import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private readonly KEY_BORRAR_INICIO = 'permite_borrar_inicio';

  constructor() {}

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
