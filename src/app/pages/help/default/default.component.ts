import { EmployeeService } from './../../employee/employee.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee/models/employee.model';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  employee: Employee ;

  constructor(
    private route: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(
      x => {
        this.employee = x
        console.log(x)
      })
  }

  goToChat() {
    this.route.navigateByUrl('help/chat');
  }
}
