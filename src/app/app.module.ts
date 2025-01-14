import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Ensure routing is set up here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Import BrowserAnimationsModule
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';  // Import the component
import { ButtonModule } from 'primeng/button';  // PrimeNG button module

@NgModule({
  declarations: [AppComponent],  // Declare the AppComponent here
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ButtonModule,
  ],
  bootstrap: [AppComponent]  // Bootstrap the component,
  
})
export class AppModule { }
