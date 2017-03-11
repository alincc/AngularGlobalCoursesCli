import { ApplicationRef, enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createNewHosts } from '@angularclass/hmr';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

if (environment.hmr) {
  if (module['hot']) {
    let ngModule: NgModuleRef<any>;
    (<WebpackModule>module).hot.accept();
    bootstrap().then(mod => ngModule = mod);
    (<WebpackModule>module).hot.dispose(() => {
      const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
      const elements = appRef.components.map(c => c.location.nativeElement);
      const makeVisible = createNewHosts(elements);
      ngModule.destroy();
      makeVisible();
    });
  } else {
    console.error('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}
