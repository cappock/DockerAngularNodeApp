import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Business } from '../models/business';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient){}

  addBusiness(business: Business) {
    console.log(business)
    this.http
      .post(`${this.uri}/add`, business)
      .subscribe((res) => console.log('Done'));
  }
}
