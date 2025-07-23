import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatIconModule, MatCardModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'clima';
  city = '';
  weather: any = null;
  history: any[] = [];

   constructor(private weatherService: WeatherService) {
    this.weatherService.getHistory().subscribe(h => this.history = h);
  }

  searchWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weather = data;
      this.weatherService.saveToHistory(this.city).subscribe();
      this.weatherService.getHistory().subscribe(h => this.history = h);
    },
    err => {
        this.weather = undefined;
  });
  }
}
