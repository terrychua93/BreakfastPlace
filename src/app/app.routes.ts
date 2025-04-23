import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '', component: LandingComponent},
];


export const routerProviders = [
    provideRouter(routes, withComponentInputBinding())
];
