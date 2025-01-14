import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';  // Example component

// Define your routes array here
export const routes: Routes = [
  { path: '', component: AppComponent },
  // Add more routes as needed
//   {
//     path: 'error',
//     component: MainLayoutComponent,
//     loadChildren: () =>
//       import('./modules/error/error.module').then((m) => m.ErrorModule),
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Register routes in NgModule
  exports: [RouterModule]
})
export class AppRoutingModule { }