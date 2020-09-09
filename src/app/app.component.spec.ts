import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { WeatherService } from './services/weather.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    //create fakes/mocks for dependencies
    const authServiceSpy = jasmine.createSpyObj('AuthService',['getLoggedInUser']);
    authServiceSpy.getLoggedInUser.and.returnValue({name:'Rohith',role:'admin'}); //return hard-coded admin user
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService',['setCurrentTemperature','getCurrentTemperature']);
    weatherServiceSpy.getCurrentTemperature.and.returnValue(30);//return hard-coded  temperature

    TestBed.configureTestingModule({
      providers: [
        AppComponent, //Add the component we are testing also as the provider
        {provide:AuthService, useValue:authServiceSpy}, //provide mock service for AuthService
        {provide:WeatherService, useValue:weatherServiceSpy}, //provide mock service for WeatherService

      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const comp = TestBed.get(AppComponent); //get the component from test bed
    expect(comp).toBeTruthy();
  });
  it('should show current temperature', () => {
    const comp:AppComponent = TestBed.get(AppComponent); //get the component from test bed
    comp.showCurrentTemperature();
    expect(comp.currentTemp).toBe(30);
  });
  it('should set current temperature', () => {
    const comp:AppComponent = TestBed.get(AppComponent); //get the component from test bed
    //create a hard-coded test number input event 
    const event = {
      target: {
        value: 30
      }
    }
    comp.updateCurrentTemperatureEvent(event);
    expect(comp.currentTemp).toBe(30);
  });
});


/*
export class Calculator{
  add(a,b){}
  subtract(a,b){}
}


//A Jasmine suite - Describes the module('Calculator') tha we are testing
describe('Calculator',()=>{
  //beforeEach() will be executed before every test case 'it()'.
  beforeEach(()=>{
    //place to create and inject the dependencies
  }) 
  //A Jasmine spec - test case for the functionality(add) that we are testing.
  it('should add two numbers',()=>{
    const calculator:Calculator = new Calculator();
    expect(calculator.add(2,2)).toEqual(4) //'matcher' (toEqual) for comparing results.
  })
  it('should subtract two numbers',()=>{
    const calculator:Calculator = new Calculator();
    expect(calculator.subtract(2,1)).toEqual(1) //'matcher' (toEqual) for comparing results.
  })
})
*/
