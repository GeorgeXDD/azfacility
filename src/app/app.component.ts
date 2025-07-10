import { Component, inject } from '@angular/core';
import { MatToolbarModule }           from '@angular/material/toolbar';
import { MatMenuModule }              from '@angular/material/menu';
import { MatButtonModule }            from '@angular/material/button';
import { MatIconModule }                from '@angular/material/icon'; 
import { CommonModule }               from '@angular/common';
import { NavigationEnd, RouterModule, Router }       from '@angular/router';
import { MatSidenavModule }           from '@angular/material/sidenav';
import { filter } from 'rxjs';

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
  title = 'AZFacility';
  currentUrl: string = '';
  private router = inject(Router); // ✅ fix: inject Router manually

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = (event as NavigationEnd).urlAfterRedirects;
    });
  }

  isServiciiActive(): boolean {
    return this.currentUrl.startsWith('/servicii');
  }
}