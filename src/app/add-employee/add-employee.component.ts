import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import {EmmitterServiceService} from '../services/emmitter.service';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  data = {
    name: '',
    salary:'',
    age: '',
    id: '',
  };
  Type: any = [];
  @ViewChild('id') id;
  @ViewChild('name') name;
  @ViewChild('salary') salary;
  @ViewChild('age') age;
  
  constructor(public api: EmployeeService, public router: Router, public emitterService: EmmitterServiceService) {
  }

  ngOnInit() {
  }

  async onFormSubmit(data: NgForm) {
    await this.api.create(data)
    .subscribe(res => {
      console.log('Added device');
    }, (err) => {
      console.log(err);
    });
  }
}