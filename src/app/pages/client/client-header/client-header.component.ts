import { Router } from '@angular/router';
import { CreditCard } from './../../payment/models/creditcard.model';
import { PaymentService } from './../../payment/payment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  formCard: FormGroup = null;
  card: CreditCard[];
  fileToUpload: any;
  formEdit: FormGroup;
  client: Client = {} as Client;

  constructor(
    private clientService: ClientService,
    private paymentService: PaymentService,
    private route: Router) { }

  ngOnInit(): void {
    this.formEdit = this.editClient();
    this.formEdit.disable();
    this.get();
    this.formCard = this.createAddCard();
    this.paymentService.creditCard
      .subscribe(c => this.card = c);
    this.clientService.client
      .subscribe(client => this.client = client);
    this.getCards();
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

  enableEditClient() {
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
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.client.image = reader.result;
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

  getCards() {
    this.paymentService.existingCards().subscribe(x => this.card = x)
  }

  createAddCard(): FormGroup {
    return new FormGroup
      (
        {
          operator: new FormControl(null),
          number: new FormControl(null, [Validators.minLength(16), Validators.maxLength(16)]),
          dueDate: new FormControl(null, [Validators.maxLength(5)]),
          securityCode: new FormControl(null, [Validators.maxLength(3)]),
        }
      )
  }

  addCard() {
    const model =
    {
      clientId: this.clientService.getClientId(),
      operator: this.formCard.get('operator').value,
      number: this.formCard.get('number').value,
      dueDate: this.formCard.get('dueDate').value,
      securityCode: this.formCard.get('securityCode').value,
    }

    this.paymentService.postCreditCard(model)
      .subscribe(x => {
        if (x) {
          this.clientService.showMessageSuccess('Credit card added')
        }
        else {
          this.clientService.showMessageError("Coudn't add the card")
        }
      })
  }

  deleteCard(creditCardId: number) {
    const model =
    {
      clientId: this.clientService.getClientId(),
      creditCardId: creditCardId,
      deleted: true,
    }
    return this.paymentService
      .putCreditCard(model)
      .subscribe
      (
        x => {
          if (x) {
            this.clientService.showMessageSuccess('Credit card deleted')
          }
          else {
            this.clientService.showMessageError("Coudn't delete the card")
          }
        }
      );
  }

  disableClient() {
    const model = {
      clientId: this.clientService.getClientId(),
      disabled: true
    }

    this.clientService
      .disableClient(model)
      .subscribe
      (x => 
        {
          if (x)
          {
            console.log(x);
            this.route.navigateByUrl('/auth');
          }else
          console.log(x)
        });
  }
}
