import { Component } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'breakfast_place';
  theme: string;

  constructor(private configService: AppConfigService) {
    this.theme = this.configService.getConfig().theme;
  }
}
