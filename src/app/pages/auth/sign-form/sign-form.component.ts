import { ClientService } from 'src/app/pages/client/main/client.service';
import { Client } from 'src/app/pages/client/models/client.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {

  form: FormGroup = null;
  client: Client;
  
  constructor(private clientService : ClientService) { }

  public ngOnInit(): void 
  {
    this.form = this.createSignUp();
  }

  createSignUp() : FormGroup
  {
    return new FormGroup
    (
      {
        name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [Validators.minLength(4), Validators.maxLength(50)]), 
      }
    )
  }

  saveSignUp()
  {
    const model = 
    {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    this.clientService._postClient(model)
    .subscribe(x => 
      {
        if(x){
          
        }
        else{
          // mensagem
        }
      });
  }
}
