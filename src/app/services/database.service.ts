import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqLite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private platform: string = Capacitor.getPlatform();

  constructor() {}

  async inicializarCarpeta(): Promise<void> {
    this.db = await this.sqLite.createConnection(
      'citas_db',
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();

    const schema =`
      CREATE TABLE IF NOT EXISTS citas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      frase TEXT NOT NULL,
      autor TEXT NOT NULL
      );
      `;
      await this.db.execute(schema);
  }

  async ejecutarConsulta(sqlite: string, params: any[] = []) {
    return await this.db.run(sqlite, params);
  }

  async obtenerDatos(sqlite: string, params: any[] = []) {
    return await this.db.query(sqlite, params);
  }

}
