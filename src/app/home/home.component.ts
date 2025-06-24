import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChild, ViewChildren  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('viewport', { static: false }) viewport!: ElementRef<HTMLDivElement>;
  @ViewChildren('card') cards!: QueryList<ElementRef<HTMLElement>>;

  private scrollAmount = 0;
  sliding = false;
  direction: 'next' | 'prev' = 'next';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  services = [
    { icon: 'fas fa-binoculars',  title: 'Lorem Ipsum' },
    { icon: 'fas fa-bullseye',    title: 'Dolor Sitema' },
    { icon: 'fas fa-crosshairs',  title: 'Sedare Perspiciatis' },
    { icon: 'fas fa-list',        title: 'Magni Dolores' },
    { icon: 'fas fa-gem',         title: 'Nemos Enimade' },
  ];

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({ once: true, duration: 600 });
      AOS.refresh();

      setInterval(() => this.calculateScrollAmount());
    }
  }

   private calculateScrollAmount() {
    if (!this.cards.first) return;
    const el = this.cards.first.nativeElement;
    const style = getComputedStyle(el);
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    this.scrollAmount = el.offsetWidth + margin;
  }

  /** scroll viewport right by exactly one card */
  next() {
    this.viewport.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth'
    });
  }

  /** scroll viewport left by exactly one card */
  prev() {
    this.viewport.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth'
    });
  }

  features = [
    {
      img: 'big-image.jpg',
      iconClass: 'fa-solid fa-seedling fa-lg text-warning',
      title: 'Management complet',
      text: 'Management complet al proprietății tale, de la A la Z'
    },
    {
      img: 'big-image.jpg',
      iconClass: 'fa-solid fa-chart-simple fa-lg text-warning',
      title: 'Optimizare costuri',
      text: 'Optimizați costurile și resursele, fără compromisuri'
    },
    {
      img: 'big-image.jpg',
      iconClass: 'fa-solid fa-rocket fa-lg text-warning',
      title: 'Intervenții rapide',
      text: 'Intervenții rapide, eficiență și profesionalism constant'
    },
    {
      img: 'big-image.jpg',
      iconClass: 'fa-solid fa-lock fa-lg text-warning',
      title: 'Siguranță & confort',
      text: 'Siguranță și confort pentru tine și chiriași'
    }
  ];

  mainServices = [
    {
      img: 'big-image.jpg',
      title: 'Administrare zilnică',
      desc: 'Gestionează-ți imobilul fără bătăi de cap…'
    },
    {
      img: 'big-image-bw.png',
      title: 'Întreținere și Reparații',
      desc: 'Întreținere preventivă pentru instalații…'
    },
    {
      img: 'big-image.jpg',
      title: 'Servicii de Curățenie',
      desc: 'Curățenie zilnică, periodică sau post-construcție…'
    },
    {
      img: 'big-image-bw.png',
      title: 'Pază și Supraveghere',
      desc: 'Soluții complete 24/7: monitorizare video…'
    },
    {
      img: 'big-image.jpg',
      title: 'Amenajare Spații Verzi',
      desc: 'Proiectare și întreținere de grădini…'
    }
  ];

  helps = [
    {
      title: 'Optimizăm costurile',
      list: [
        'Analiză detaliată a cheltuielilor operaționale',
        'Planuri personalizate de reducere a costurilor',
        'Raportări transparente și consultanță continuă'
      ],
      img: 'about1.jpg'
    },
    {
      title: 'Servicii la timp',
      list: [
        'Echipă de intervenție disponibilă 24/7',
        'Calendar digital de mentenanță programată',
        'Alertare instantă pentru orice urgență'
      ],
      img: 'about2.jpg'
    },
    {
      title: 'Transparență totală',
      list: [
        'Acces online la toate rapoartele și facturile',
        'Dashboard în timp real cu performanțele proprietății',
        'Comunicare directă cu managerii de proiect'
      ],
      img: 'values.jpg'
    }
  ];

  propertyTypes = [
    {
      iconClass: 'fa-solid fa-building',
      title: 'Clădiri de birouri & business center'
    },
    {
      iconClass: 'fa-solid fa-shop',
      title: 'Spații comerciale & mall-uri'
    },
    {
      iconClass: 'fa-solid fa-house',
      title: 'Ansambluri rezidențiale & apartamente'
    },
    {
      iconClass: 'fa-solid fa-industry',
      title: 'Spații industriale & logistice'
    }
  ];
}
