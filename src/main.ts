 import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { DatabaseService } from './app/services/database.service';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
})
  .then(async (appRef) => {
    
    // se inicializa la base de datos de inmediato despues de bootstrap
    const dbService = appRef.injector.get(DatabaseService);
    try {
      await dbService.inicializarCarpeta();
      console.log('SQLite: Base de datos lista');
    } catch (err) {
      console.error('SQLite: Error al inicializar', err);
    }
  })
  .catch((err) => console.error(err));

