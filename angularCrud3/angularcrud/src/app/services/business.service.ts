import { Injectable } from '@angular/core';
import { Business } from '../models/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor() { }

  addBusiness(business : Business){
    console.log(business)
  }
}
