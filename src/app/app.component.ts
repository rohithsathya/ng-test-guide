import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentTemp:number = 0;
  constructor(private weatherService:WeatherService){}
  ngOnInit(){
    this.showCurrentTemperature();
  }
  showCurrentTemperature(){
    this.currentTemp = this.weatherService.getCurrentTemperature();
  }
  updateCurrentTemperatureEvent(event){
    this.weatherService.setCurrentTemperature(event.target.value);
    this.showCurrentTemperature();
  }

}
