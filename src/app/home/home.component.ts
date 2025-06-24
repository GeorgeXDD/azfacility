import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule],
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

  features = [
    {
      img: 'big-image.jpg',
      matIcon: 'inventory_2',
      title: 'Management complet',
      text: 'Management complet al proprietății tale, de la A la Z'
    },
    {
      img: 'big-image.jpg',
      matIcon: 'bar_chart',
      title: 'Optimizare costuri',
      text: 'Optimizați costurile și resursele, fără compromisuri'
    },
    {
      img: 'big-image.jpg',
      matIcon: 'rocket_launch',
      title: 'Intervenții rapide',
      text: 'Intervenții rapide, eficiență și profesionalism constant'
    },
    {
      img: 'big-image.jpg',
      matIcon: 'lock',
      title: 'Siguranță & confort',
      text: 'Siguranță și confort pentru tine și chiriași'
    }
  ];
}