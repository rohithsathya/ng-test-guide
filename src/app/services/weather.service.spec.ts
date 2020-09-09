import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { AuthService } from './auth.service';

describe('WeatherService', () => {
  beforeEach(() => {
      //create mock/spy for authService
      const authServiceSpy = jasmine.createSpyObj('AuthService',['getLoggedInUser']);//className,[methodNames to fake]
      authServiceSpy.getLoggedInUser.and.returnValue({name:'Rohith',role:'admin'}); //return hard-coded admin user

      TestBed.configureTestingModule({
        providers:[
          {provide:AuthService,useValue:authServiceSpy} //provide mock service for AuthService
        ]
      })
  });

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

  it('Admin should set temperature', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    service.setCurrentTemperature(45);
    expect(service.getCurrentTemperature()).toEqual(45);
  });

});
