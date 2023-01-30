import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

window.addEventListener('scroll', function () {
  if (window.scrollY > 20 && window.innerWidth > 991) {
    document.querySelector('nav')?.classList.add('navbar-shrink');
  } else {
    document.querySelector('nav')?.classList.remove('navbar-shrink');
  }
});
