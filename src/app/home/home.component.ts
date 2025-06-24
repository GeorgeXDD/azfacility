import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    { icon: 'fas fa-binoculars',  title: 'Lorem Ipsum' },
    { icon: 'fas fa-bullseye',    title: 'Dolor Sitema' },
    { icon: 'fas fa-crosshairs',  title: 'Sedare Perspiciatis' },
    { icon: 'fas fa-list',        title: 'Magni Dolores' },
    { icon: 'fas fa-gem',         title: 'Nemos Enimade' },
  ];
}
