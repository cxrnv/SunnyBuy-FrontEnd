import { ClientService } from 'src/app/pages/client/client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/pages/client/models/client.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  client: Client;
  public form: FormGroup = null;
  private subscriptions: Subscription[] = [];

  constructor(private clientService: ClientService, private route: Router) { }

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
      .push(
        this.clientService
          .login(model)
          .subscribe(x => {
            console.log(x)

            if (x != 0) {
              this.clientService.showMessageSuccess('Operation executed successfully')
              this.route.navigate(['']);
            } else {
              this.clientService.showMessageError('Email or password incurrect')
            }
          })
      )
  }
}
