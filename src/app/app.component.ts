import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule ],
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
    });
  }
}
