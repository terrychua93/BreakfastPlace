import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./sections/home/home.component";
import { ProfileComponent } from "./sections/profile/profile.component";

@Component({
  selector: 'app-landing',
  imports: [NavbarComponent, HomeComponent, ProfileComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
