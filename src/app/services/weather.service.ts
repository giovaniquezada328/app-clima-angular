import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(`${this.baseUrl}/weather?city=${city}`);
  }

  getHistory() {
    return this.http.get<string[]>(`${this.baseUrl}/history`);
  }

  saveToHistory(city: string) {
    return this.http.post(`${this.baseUrl}/history`, { city });
  }
}
