import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-angajare',
    imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
  ],
  templateUrl: './angajare.component.html',
  styleUrl: './angajare.component.scss'
})
export class AngajareComponent {
  availablePositions = [
    { title: 'Tehnicieni mentenanță', description: '(electricieni, instalatori, HVAC)' },
    { title: 'Operatori de curățenie', description: 'Spații comerciale/rezidențiale' },
    { title: 'Agenti de vânzări servicii facility management', description: 'descriere' },
    { title: 'Personal pentru pază și supraveghere', description: 'descriere' },
    { title: 'Agent întreținere spații verzi', description: 'descriere' },
    { title: 'Agent de vânzări servicii & management', description: 'descriere' },
    { title: 'Specialist marketing & promovare', description: 'descriere' },
    { title: 'Part Time worker', description: 'descriere' },
  ];

  firstColumn: typeof this.availablePositions = [];
  secondColumn: typeof this.availablePositions = [];

  ngOnInit(): void {
    const middleIndex = Math.ceil(this.availablePositions.length / 2);
    this.firstColumn = this.availablePositions.slice(0, middleIndex);
    this.secondColumn = this.availablePositions.slice(middleIndex);
  }
}
