import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  employees ={
    id:''
  };  
  data : any;
  @ViewChild('search') id;
  num = 2;
  
  constructor(private employeeService: EmployeeService) { 
    //this.getEmployee(4);
  }

  ngOnInit(): void {
  }
  
  getEmployee() {
    this.employeeService.get(this.employees.id)
      .subscribe(res => {
          this.data = res;
          console.log(res);
        },
        error => {
          console.log(error);
        });
  }
}
