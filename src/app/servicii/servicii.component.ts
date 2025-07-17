import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-servicii',
  standalone: true,
  templateUrl: './servicii.component.html',
  styleUrl: './servicii.component.scss',
  imports: [
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class ServiciiComponent implements OnInit, AfterViewInit {

  currentSection = '';

constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    AOS.init({
      duration: 600,
      once: true,
    });
  }


ngAfterViewInit() {
  if (isPlatformBrowser(this.platformId)) {
    AOS.init({
      duration: 600,
      once: true,
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.currentSection = entry.target.id;
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll<HTMLElement>('.servicii-section')
      .forEach(section => observer.observe(section));

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          setTimeout(() => {
            if (tree.fragment) {
              const el = document.getElementById(tree.fragment);
              if (el) {
                el.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });
                this.currentSection = tree.fragment;
              }
            }
          }, 50);
        }
      }
    });
  }
}
}