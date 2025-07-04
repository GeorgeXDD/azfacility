// src/app/app.routes.ts
import { Route, RouterModule, Routes, provideRouter, withRouterConfig } from '@angular/router';

import { HomeComponent }       from './home/home.component';
import { ServiciiComponent }   from './servicii/servicii.component';
import { DespreNoiComponent }  from './despre-noi/despre-noi.component';
import { AngajareComponent }   from './angajare/angajare.component';
import { ContactComponent }    from './contact/contact.component';
import { NgModule } from '@angular/core';


export const appRoutes: Routes = [
  { path: '',              component: HomeComponent    },
  { path: 'servicii',      component: ServiciiComponent},
  { path: 'despre-noi',    component: DespreNoiComponent},
  { path: 'angajare',      component: AngajareComponent},
  { path: 'contact',       component: ContactComponent },
  { path: '**',            redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}