import { Component } from '@angular/core';
import { MatToolbarModule }           from '@angular/material/toolbar';
import { MatMenuModule }              from '@angular/material/menu';
import { MatButtonModule }            from '@angular/material/button';
import { MatIconModule }                from '@angular/material/icon'; 
import { CommonModule }               from '@angular/common';
import { RouterModule }               from '@angular/router';
import { MatSidenavModule }           from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AZFacility'
  services = [
    { icon: 'fas fa-binoculars',  title: 'Lorem Ipsum' },
    { icon: 'fas fa-bullseye',    title: 'Dolor Sitema' },
    { icon: 'fas fa-crosshairs',  title: 'Sedare Perspiciatis' },
    { icon: 'fas fa-list',        title: 'Magni Dolores' },
    { icon: 'fas fa-gem',         title: 'Nemos Enimade' },
  ];
}
