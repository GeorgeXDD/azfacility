// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations }    from '@angular/platform-browser/animations';
import { provideRouter }        from '@angular/router';

import { AppComponent }         from './app/app.component';
import { appRoutes }            from './app/app.routes';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ once: true, duration: 600 });


bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(appRoutes)
  ]
})
.catch(err => console.error(err));
