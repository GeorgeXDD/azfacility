// src/app/app.routes.ts
import { Route } from '@angular/router';

import { HomeComponent }       from './home/home.component';
import { ServiciiComponent }   from './servicii/servicii.component';
import { DespreNoiComponent }  from './despre-noi/despre-noi.component';
import { AngajareComponent }   from './angajare/angajare.component';
import { ContactComponent }    from './contact/contact.component';

export const appRoutes: Route[] = [
  { path: '',              component: HomeComponent    },  // Acasă
  { path: 'servicii',      component: ServiciiComponent},
  { path: 'despre-noi',    component: DespreNoiComponent},
  { path: 'angajare',      component: AngajareComponent},
  { path: 'contact',       component: ContactComponent },
  { path: '**',            redirectTo: '', pathMatch: 'full' }
];
