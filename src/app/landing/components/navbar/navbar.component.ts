import { AfterViewInit, Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, BadgeModule, OverlayBadgeModule, CommonModule, AvatarModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  items: MenuItem[] | undefined;
  mobileMenuVisible = false;
  scrolled = false; // Track if user has scrolled
  adjustTop: number = 50;
  activeSection: string = 'home'; // Default active section

  constructor(private router: Router, private route: ActivatedRoute) {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Profile',
        icon: 'pi pi-search',
        routerLink: 'profile'
      }
    ];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50; // Change at 50px scroll
  }

  ngAfterViewInit() {



    // Listen for fragment changes and scroll when detected
    this.route.fragment.subscribe((fragment) => {
      console.log(fragment);
      if (fragment) {
        this.activeSection = fragment;
        this.scrollToSection(fragment);
      }
    });
  }

  navigateToFragment(sectionId: string, event: Event) {
    event.preventDefault(); // Prevent default anchor behavior
    this.router.navigate(['/'], { fragment: sectionId }).then(() => {
      this.scrollToSection(sectionId); // Ensure smooth scroll
    });
  }

  private scrollToSection(sectionId: string) {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - this.adjustTop;
        this.smoothScrollTo(targetPosition, 1200);
      }
    }, 100);
  }

  private smoothScrollTo(targetPosition: number, duration: number) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animationFrame = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animationFrame);
      }
    };

    requestAnimationFrame(animationFrame);
  }



  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }
}
