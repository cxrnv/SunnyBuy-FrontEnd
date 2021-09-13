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

  formEdit: FormGroup;
  client: Client = {} as Client;

  constructor(private clientService: ClientService, private route: Router) { }

  ngOnInit(): void {
    this.formEdit = this.editClient();
    this.get();
  }

  editClient(): FormGroup {
    return new FormGroup
      (
        {
          clientCpf: new FormControl(null, [Validators.minLength(11), Validators.maxLength(11)]),
          name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
          email: new FormControl(null, [Validators.email, Validators.required]),
          password: new FormControl(null, [Validators.minLength(4), Validators.maxLength(50)]),
          address: new FormControl(null, [Validators.minLength(10), Validators.maxLength(100)]),
          phone: new FormControl(null, [Validators.minLength(11), Validators.maxLength(11)])
        }
      )
  }

  saveEditClient() {
    const model =
    {
      clientId: this.clientService.getClientId(),
      clientCpf: this.formEdit.get('clientCpf').value,
      name: this.formEdit.get('name').value,
      email: this.formEdit.get('email').value,
      password: this.formEdit.get('password').value,
      address: this.formEdit.get('address').value,
      phone: this.formEdit.get('phone').value,
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

  get() {
    this.clientService.getClient()
      .subscribe(data => {
        this.client = data;
        console.log(data.name)
      })
  }

  teste(){
    console.log(this.formEdit)
  }
}
