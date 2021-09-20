import { EmployeeService } from './../../employee/employee.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../employee/models/employee.model';
import { Router } from '@angular/router';
import { ClientService } from '../../client/client.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {

  employee: Employee;
  public form: FormGroup = null;
  private subscriptions: Subscription[] = [];

  constructor(
    private clientService: ClientService,
    private employeeService: EmployeeService,
    private route: Router) { }

  ngOnInit(): void {
    this.form = this.createLogin();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  createLogin(): FormGroup {
    return new FormGroup
      (
        {
          email: new FormControl(null, [Validators.email, Validators.required]),
          password: new FormControl(null, [Validators.minLength(4), Validators.maxLength(50)]),
        }
      )
  }

  saveLogin() {
    const model =
    {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    this.subscriptions
      .push
      (

        this.employeeService
          .login(model)
          .subscribe(x => {
            console.log(x)

            if (x != 0) {
              this.clientService.showMessageSuccess('Operation executed successfully')
              this.route.navigate(['/employee-page/home']);
            } else {
              this.clientService.showMessageError('Email or password incurrect')
            }
          }))
  }
}
