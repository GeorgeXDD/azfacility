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
      img: 'about1.jpg',
      items: [
        {
          icon: 'fa-solid fa-building',
          label: 'Administrăm proprietăți închiriate',
          text: 'gestiune chiriași, contracte, plăți, întreținere.'
        },
        {
          icon: 'fa-solid fa-hammer',
          label: 'Întreținerea clădirilor',
          text: 'curățenie, reparații, instalații, echipe tehnice.'
        },
        {
          icon: 'fa-solid fa-bolt',
          label: 'Monitorizăm utilitățile',
          text: 'transmitem indexuri, plătim facturi și ținem legătura cu furnizorii.'
        }
      ]
    },
    {
      title: 'De ce noi?',
      img: 'about2.jpg',
      items: [
        {
          icon: 'fa-solid fa-layer-group',
          label: 'Servicii complete',
          text: 'ca tu să nu cauți mai mulți furnizori.'
        },
        {
          icon: 'fa-solid fa-coins',
          label: 'Optimizare costuri',
          text: 'accent pe costurile operaționale fără compromisuri.'
        },
        {
          icon: 'fa-solid fa-eye',
          label: 'Transparență',
          text: 'comunicare deschisă și informare constantă.'
        },
        {
          icon: 'fa-solid fa-cogs',
          label: 'Procese fluent executate',
          text: 'administrative și tehnice fără întreruperi.'
        }
      ]
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
}