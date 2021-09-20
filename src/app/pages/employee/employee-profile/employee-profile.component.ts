import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client/client.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  fileToUpload: any;
  name : string[];
  employee: Employee = {} as Employee;

  constructor(
    private clientService : ClientService,
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

    goToHome()
    {
      this.route.navigateByUrl('employee-page/home');
    }

    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.employee.image = reader.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  
    getBase64(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () { };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }

    saveEditImage() {
      const model =
      {
        employeeId: this.employeeService.getEmployeeId(),
        image: this.employee.image
      }
  
      this.employeeService.editEmployee(model)
        .subscribe(x => {
          if (x) {
  
            this.clientService.showMessageSuccess('Operation executed successfully')
          }
          else {
            this.clientService.showMessageError('Occurred an error while editing')
          }
        });
    }
}
