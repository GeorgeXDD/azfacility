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

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('viewport', { static: false }) viewport!: ElementRef<HTMLDivElement>;
  @ViewChildren('card') cards!: QueryList<ElementRef<HTMLElement>>;

  private autoPlayId: any;
  sliding = false;
  direction: 'next' | 'prev' = 'next';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

 services = [
    {
      icon: 'fas fa-building',
      title: 'Servicii de Administrare a Proprietății'
    },
    {
      icon: 'fas fa-hammer',
      title: 'Reparații și Renovări'
    },
    {
      icon: 'fas fa-broom',
      title: 'Servicii de Curățenie'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Amenajarea și Întreținerea Spațiilor Verzi'
    },
        {
      icon: 'fas fa-shield-halved',
      title: 'Servicii suport'
    }
  ];

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({ once: true, duration: 600 });
      AOS.refresh();

      this.autoPlayId = setInterval(() => this.next(), 5000);
    }
    if (isPlatformBrowser(this.platformId) && this.heroVideo) {
      const video = this.heroVideo.nativeElement;

      video.muted = true; 
      video.playsInline = true;

      video.play().catch(err => {
        console.warn('Video play() failed:', err);
      });
    }
  }

    ngOnDestroy() {
    if (this.autoPlayId) {
      clearInterval(this.autoPlayId);
    }
  }

  /** scroll viewport right by exactly one card */
  next() {
    const amount = window.innerWidth < 768 ? 300 : 485;
    const vp = this.viewport.nativeElement;
    const max = vp.scrollWidth - vp.clientWidth;

    if (vp.scrollLeft + amount >= max) {
      // if moving by “amount” would go past the end, loop back to start
      vp.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      vp.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }

  prev() {
    const amount = window.innerWidth < 768 ? 300 : 485;
    const vp = this.viewport.nativeElement;
    const max = vp.scrollWidth - vp.clientWidth;

    if (vp.scrollLeft - amount <= 0) {
      // if moving left by “amount” goes before the start, loop to the end
      vp.scrollTo({ left: max, behavior: 'smooth' });
    } else {
      vp.scrollBy({ left: -amount, behavior: 'smooth' });
    }
  }


  features = [
    {
      img: 'home-page/stergere-telecomanda.jpg',
      iconClass: 'fa-solid fa-seedling fa-lg text-warning',
      title: 'Management complet',
      text: 'Management complet al proprietății tale, de la A la Z'
    },
    {
      img: 'home-page/curat-tv.jpg',
      iconClass: 'fa-solid fa-chart-simple fa-lg text-warning',
      title: 'Optimizare costuri',
      text: 'Optimizați costurile și resursele, fără compromisuri'
    },
    {
      img: 'home-page/curat-podea.jpg',
      iconClass: 'fa-solid fa-rocket fa-lg text-warning',
      title: 'Calitate',
      text: 'Eficiență și profesionalism constant'
    },
    {
      img: 'home-page/curat-masa.jpg',
      iconClass: 'fa-solid fa-lock fa-lg text-warning',
      title: 'Siguranță & confort',
      text: 'Siguranță și confort pentru tine și chiriași'
    }
  ];

  mainServices = [
    {
      img: 'home-page/aparatura-curatenie.jpg',
      title: 'Administrare zilnică',
      desc: 'Preluăm toate sarcinile zilnice – contracte de închiriere, facturare utilităţi şi relaţia cu chiriaşii – ca tu să te concentrezi pe obiectivele tale.'
    },
    {
      img: 'home-page/aparatura-curatenie.jpg',
      title: 'Întreținere și Reparații',
      desc: 'Monitorizăm preventiv instalaţiile (electrice, sanitare, HVAC) și intervenim prompt la orice defecţiune pentru a evita costuri suplimentare.'
    },
    {
      img: 'home-page/aparatura-curatenie.jpg',
      title: 'Servicii de Curățenie',
      desc: 'Asigurăm curățenie zilnică, periodică sau post-construcție în birouri, apartamente, spații comerciale și întreţinerea spaţiilor verzi.'
    },
    {
      img: 'home-page/aparatura-curatenie.jpg',
      title: 'Pază și Supraveghere',
      desc: 'Oferim soluţii integrate de supraveghere video și pază fizică pentru protecţia completă a proprietăţii tale.'
    },
    {
      img: 'home-page/aparatura-curatenie.jpg',
      title: 'Amenajare Spații Verzi',
      desc: 'Creăm și întreținem grădini, parcuri și zone verzi care îmbină estetica cu funcționalitatea.'
    }
  ];

  helps = [
    {
      title: 'Optimizăm costurile',
      items: [
        { icon: 'fa-solid fa-chart-line',        text: 'Analiză detaliată a cheltuielilor operaționale' },
        { icon: 'fa-solid fa-percent',           text: 'Planuri personalizate de reducere a costurilor' },
        { icon: 'fa-solid fa-file-invoice-dollar', text: 'Raportări transparente și consultanță continuă' }
      ],
      img: 'home-page/cost-optimization.jpg'
    },
    {
      title: 'Servicii la timp',
      items: [
        { icon: 'fa-solid fa-headset',        text: 'Echipă de intervenție disponibilă 24/7' },
        { icon: 'fa-solid fa-calendar-alt',   text: 'Calendar digital de mentenanță programată' },
        { icon: 'fa-solid fa-bell',           text: 'Alertare instantă pentru orice urgență' }
      ],
      img: 'home-page/servicii-timp.jpg'
    },
    {
      title: 'Transparență totală',
      items: [
        { icon: 'fa-solid fa-globe',            text: 'Acces online la toate rapoartele și facturile' },
        { icon: 'fa-solid fa-tachometer-alt',   text: 'Dashboard în timp real cu performanțele proprietății' },
        { icon: 'fa-solid fa-comments',         text: 'Comunicare directă cu managerii de proiect' }
      ],
      img: 'home-page/aparatura-curatenie.jpg'
    }
  ];

  propertyTypes = [
    {
      iconClass: 'fa-solid fa-building',
      title: 'Clădiri de birouri & business center',
      img: 'home-page/cladiri-birouri.jpg'
    },
    {
      iconClass: 'fa-solid fa-shop',
      title: 'Spații comerciale & mall-uri',
      img: 'home-page/mall-cleaning.jpg'
    },
    {
      iconClass: 'fa-solid fa-house',
      title: 'Ansambluri rezidențiale & apartamente',
      img: 'home-page/rezidentiale.jpg'
    },
    {
      iconClass: 'fa-solid fa-industry',
      title: 'Spații industriale & logistice',
      img: 'home-page/industrial-cleaning.jpg'
    },
        {
      iconClass: 'fa-solid fa-industry',
      title: 'Spații industriale & logistice',
      img: 'home-page/rezidentiale.jpg'
    },
        {
      iconClass: 'fa-solid fa-industry',
      title: 'Spații industriale & logistice',
      img: 'home-page/rezidentiale.jpg'
    }
  ];
}
