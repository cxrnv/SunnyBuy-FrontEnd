import { ClientService } from 'src/app/pages/client/client.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from 'src/app/pages/client/models/client.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit, OnDestroy {

  form: FormGroup = null;
  client: Client = {} as Client;

  private subscriptions: Subscription[] = [];

  constructor(private clientService: ClientService, private route: Router) { }

  public ngOnInit(): void {
    this.form = this.createSignUp();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  createSignUp(): FormGroup {
    return new FormGroup
      (
        {
          name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
          email: new FormControl(null, [Validators.email, Validators.required]),
          password: new FormControl(null, [Validators.minLength(4), Validators.maxLength(50)]),
        }
      )
  }

  saveSignUp() {
    const model =
    {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }


    this.subscriptions
      .push
      (
        this.clientService.postClient(model)
          .subscribe(x => {
            if (x) {
              this.clientService.showMessageSuccess('Operation executed successfully')
              this.route.navigate(['/login']);
              // window.location.reload();
            }
            else {
              this.clientService.showMessageError('Occurred an error while creating a new user')
            }
          }))      
  }
}
