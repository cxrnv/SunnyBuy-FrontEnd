import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  name : string[];
  employee: Employee = {} as Employee;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService
    .getEmployee()
    .subscribe(data => 
      {
        this.employee = data,
        this.name = this.employee.name.split(" ");
      })
  }

}
