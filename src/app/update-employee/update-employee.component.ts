import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  message = '';
  employees: any =[];

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getEmployee(this.route.snapshot.paramMap.get('id'));
  }

  getEmployee(id) {
      this.employeeService.get(id)
        .subscribe(res => {
            this.employees = res;
            console.log(res);
          },
          error => {
            console.log(error);
          });
    }

  update() {
    this.employeeService.update(this.route.snapshot.paramMap.get('id'),this.employees)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The employee was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEmployee() {
    this.employeeService.delete(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employee']);
        },
        error => {
          console.log(error);
        });
  }
}