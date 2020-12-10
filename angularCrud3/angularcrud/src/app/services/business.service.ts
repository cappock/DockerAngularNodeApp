import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  uri = 'http://localhost:4000/business';
  
  constructor(private http: HttpClient) {}

  addBusiness(person_name: String, business_name: String, business_gst_number: Number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number,
    };
    console.log(obj);
    this.http
      .post(`${this.uri}/add`, obj)
      .subscribe((res) => console.log('Done'));
  }
}
