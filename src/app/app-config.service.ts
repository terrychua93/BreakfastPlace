import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  config = {
    theme: 'md-light-indigo',
    ripple: true,
    apiBaseUrl: 'https://api.example.com', // Set the API base URL
  };

  getConfig() {
    return this.config;
  }
}