import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Business } from 'src/app/models/business';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-crud-add',
  templateUrl: './crud-add.component.html',
  styleUrls: ['./crud-add.component.css']
})
export class CrudAddComponent implements OnInit {
  angForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private businessService : BusinessService
  ) { 
    this.angForm = this.formBuilder.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_gst_number: [null, Validators.required ]
      });
  }

  ngOnInit(): void {
    
  }

  addBusiness() {
    const business = new Business(this.angForm.value);
    this.businessService.addBusiness(business);
  }
  

  get f(): any {
    return this.angForm.controls;
  }

}
