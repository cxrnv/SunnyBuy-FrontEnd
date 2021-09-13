import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  form: FormGroup = null;
  client: Client = {} as Client;
  constructor(private clientService: ClientService,  private route: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.clientService.getClient()
      .subscribe(data => {
        this.client = data;
        console.log(data.name)
      })
  }
  editClient(): FormGroup {
    return new FormGroup
      (
        {
          clientCpf : new FormControl(null, [Validators.minLength(11), Validators.maxLength(11)]),
          name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
          email: new FormControl(null, [Validators.email, Validators.required]),
          password: new FormControl(null, [Validators.minLength(4), Validators.maxLength(50)]),
          address: new FormControl(null, [Validators.minLength(10), Validators.maxLength(100)] ),
          phone  : new FormControl(null, [Validators.minLength(11), Validators.maxLength(11)])
        }
      )
  }

  saveEditClient() {
    const model =
    {
      clientId : this.clientService.getClientId(),
      clientCpf : this.form.get('clientCpf').value,
      name    : this.form.get('name').value,
      email   : this.form.get('email').value,
      password: this.form.get('password').value,
      address : this.form.get('address').value,
      phone   : this.form.get('phone').value,
    }

    this.clientService.editClient(model)
      .subscribe(x => {
        if (x) {
          this.clientService.showMessageSuccess('Operation executed successfully')
          this.route.navigate(['/cart']);
        }
        else {
          this.clientService.showMessageError('Occurred an error while editing')
        }
      });
  }

}
