import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private currentTemperature:number = 23; // 23c by default
  constructor(private authService:AuthService) { }

  //only admins are allowed to set temperature
  setCurrentTemperature(temperature:number){ 
      //get logged in user 
      const loggedInUser = this.authService.getLoggedInUser();
      //see if logged in user is an admin
      if(loggedInUser && loggedInUser.role =='admin'){
        this.currentTemperature = temperature;
      }else{
        alert("Only Admins are allowed to set temperature");
      }
  }

  getCurrentTemperature():number{
    return this.currentTemperature;
  }

}
