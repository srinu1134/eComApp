import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  validateUser(userName: string, password: string) {
    // if(userName === 'test123' && password === 'test123') {
    //   return true;
    // } else {
    //   return false;
    // }
    // return this.http.post('https://jsonplaceholder.typicode.com/validate', data);
    if(userName === 'test1234' && password === 'test1234') {
      return of(true);
    } else {
      return of(false);
    }
  }
}

