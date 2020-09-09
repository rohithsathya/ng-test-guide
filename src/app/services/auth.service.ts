import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getLoggedInUser(){
    return {'name':'Rohith','role':'admin'};
  }
}
