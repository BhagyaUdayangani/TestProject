import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employees: any;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute,) {
    this.retrieveEmployees();
   }

  ngOnInit() {
  }

  retrieveEmployees() {
    this.employeeService.getAll()
      .subscribe(res => {
          this.employees = res;
          console.log(res);
        },
        error => {
          console.log(error);
        });
  }
}
