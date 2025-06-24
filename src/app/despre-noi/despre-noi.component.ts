import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';

interface AboutBlock {
  title: string;
  content: string[];
  img: string;
  reverse?: boolean;
}

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-despre-noi',
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    CommonModule
  ],
  templateUrl: './despre-noi.component.html',
  styleUrl: './despre-noi.component.scss'
})
export class DespreNoiComponent {
   aboutBlocks = [
  {
    title: 'Ce servicii oferim?',
    list: [
      'Administrăm proprietăți închiriate: gestionăm chiriași, contracte, plăți, întreținere.',
      'Asigurăm întreținerea clădirilor: curățenie, reparații, instalații, echipe tehnice.',
      'Monitorizăm utilitățile: transmitem indexuri, plătim facturi și ținem legătura cu furnizorii.',
    ],
    img: 'about1.jpg'
  },
  {
    title: 'De ce noi?',
    list: [
      'Servicii complete, ca tu să nu cauți mai mulți furnizori.',
      'Accent pe optimizarea costurilor operaționale.',
      'Transparență și comunicare deschisă.',
      'Procese administrative și tehnice fluent executate.',
    ],
    img: 'about2.jpg'
  }
];

// values‐section data
valuesTitle    = 'Valorile noastre';
valuesSubtitle = 'La baza activității noastre stau câteva principii clare, care ne ghidează în fiecare colaborare:';
valuesList     = [
  { label: 'Profesionalism',    text: 'Livrăm servicii corecte, bine făcute, la timp.' },
  { label: 'Transparență',      text: 'Comunicăm deschis și ținem clienții informați la fiecare pas.' },
  { label: 'Flexibilitate',     text: 'Ne adaptăm la nevoile fiecărui client, indiferent de dimensiunea sau tipul proprietății.' },
  { label: 'Responsabilitate',  text: 'Tratăm fiecare proprietate ca și cum ar fi a noastră.' },
  { label: 'Sustenabilitate',   text: 'Luăm decizii care protejează mediul și resursele, pentru un viitor mai curat.' },
];
valuesImg       = 'values.jpg';

serviceItems: ServiceItem[] = [
  { icon: 'building', title: 'Administrare', desc: 'Contracte, plăți, chiriași.' },
  { icon: 'hammer',   title: 'Reparații', desc: 'Intervenții tehnice și mentenanță.' },
  { icon: 'broom',    title: 'Curățenie', desc: 'Spații impecabile, fără stres.' },
  { icon: 'bolt',     title: 'Utilități', desc: 'Indexuri, facturi, furnizori.' },
  { icon: 'gavel',    title: 'Legal',     desc: 'Acte, contracte, autorități.' },
  { icon: 'leaf',     title: 'Eco',       desc: 'Produse și practici sustenabile.' }
];

}