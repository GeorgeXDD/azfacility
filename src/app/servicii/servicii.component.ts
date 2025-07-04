import { AfterViewInit, Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init({
      duration: 600,
      once: true,
    });
  }

  ngAfterViewInit() {
    // Intersection observer
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.currentSection = entry.target.id;
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll<HTMLElement>('.servicii-section')
      .forEach(section => observer.observe(section));

    // scroll to fragment on NavigationEnd
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const el = document.getElementById(tree.fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    });
  }
}
