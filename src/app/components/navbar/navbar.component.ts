import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, BadgeModule, OverlayBadgeModule, CommonModule, AvatarModule, RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  mobileMenuVisible = false;

  constructor() {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/home'
      },
      {
          label: 'Profile',
          icon: 'pi pi-search',
          routerLink: '/profile'
      },
      {
        label: 'Profile',
        icon: 'pi pi-search',
        routerLink: '/profile'
      },
      {
        label: 'Profile',
        icon: 'pi pi-search',
        routerLink: '/profile'
      },
  ];
  }

  ngOnInit() {}

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }
}
