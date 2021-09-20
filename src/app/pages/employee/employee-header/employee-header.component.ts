import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.scss']
})
export class EmployeeHeaderComponent implements OnInit {

  name : string[];
  employee: Employee = {} as Employee;

  constructor(
    private employeeService: EmployeeService,
    private route : Router
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
  
    goToChat()
    {
      this.route.navigateByUrl('employee-page/chat-page');
    }

    goToProfile()
    {
      this.route.navigateByUrl('employee-page/employee');
    }
}
