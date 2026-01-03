import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db: SQLiteDBConnection | null = null;
  private platform = Capacitor.getPlatform();

  constructor() {}

  async inicializarCarpeta(): Promise<void> {
    if (this.platform === 'web') {
      return;
    }

    if (this.db) {
      return;
    }

    this.db = await this.sqlite.createConnection(
      'citas_db',
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();

    const schema = `
      CREATE TABLE IF NOT EXISTS citas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        frase TEXT NOT NULL,
        autor TEXT NOT NULL
      );
    `;
    await this.db.execute(schema);
  }

  //  asegura que la conexión se abra si no lo está la base de datos
  private async ensureDb() {
    if (!this.db) {
      await this.inicializarCarpeta();
    }
  }

  async ejecutarConsulta(sqlite: string, params: any[] = []) {
    if (this.platform === 'web') {
      return { changes: { changes: 0 } };
    }
    await this.ensureDb();
    return await this.db!.run(sqlite, params);
  }

  async obtenerDatos(sqlite: string, params: any[] = []) {
    if (this.platform === 'web') {
      return { values: [] };
    }
    await this.ensureDb();
    return await this.db!.query(sqlite, params);
  }
}



