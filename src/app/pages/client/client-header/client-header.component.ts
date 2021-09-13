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
  fileToUpload: any;
  formEdit: FormGroup;
  client: Client = {} as Client;

  constructor(private clientService: ClientService, private route: Router) { }

  ngOnInit(): void {
    this.formEdit = this.editClient();
    this.formEdit.disable();
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
          phone: new FormControl(null, [Validators.minLength(11), Validators.maxLength(11)]),
        }
      )
  }

  enableEditClient(){
    this.formEdit.enable();
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
      image: this.client.image
    }

    this.clientService.editClient(model)
      .subscribe(x => {
        if (x) {

          this.clientService.showMessageSuccess('Operation executed successfully')
          this.formEdit.disable()
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
        this.formEdit.patchValue(data);
      })
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.client.image = reader.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  editImage() {

  }

  getBase64(event) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;      
    };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
