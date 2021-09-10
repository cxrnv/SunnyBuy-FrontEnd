import { PurchaseService } from './../../../purchase/purchase.service';
import { CreditCard } from './../../models/creditcard.model';
import { PaymentService } from './../../payment.service';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/pages/client/client.service';
import { Client } from 'src/app/pages/client/models/client.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditcard-header',
  templateUrl: './creditcard-header.component.html',
  styleUrls: ['./creditcard-header.component.scss']
})
export class CreditcardHeaderComponent implements OnInit {

  formCard     : FormGroup = null;
  client       : Client = {} as Client;
  cards        : CreditCard[];

  constructor( private route: Router, private paymentService: PaymentService, private clientService: ClientService, private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.getClient();
    this.getExistingsCards();
    this.formCard = this.createAddCard();
  }

  getExistingsCards()
  {
    return this.paymentService.existingCards()
    .subscribe(x => 
      {
        this.cards = x
        console.log(x)
      })
  }

  getClient()
  {
    return this.clientService.getClient()
    .subscribe(data => 
      {
        this.client = data;
      })
  }

  createAddCard() : FormGroup
  {
    return new FormGroup
    (
      {
        operator : new FormControl(null),
        number: new FormControl(null, [Validators.minLength(16), Validators.maxLength(16)]),
        dueDate: new FormControl(null, [Validators.maxLength(5)]),
        securityCode: new FormControl(null, [Validators.maxLength(3)]),
      }
    )
  }

  addCard()
  {
    const model = 
    {
      clientId : this.clientService.getClientId(),
      operator : this.formCard.get('operator').value,
      number : this.formCard.get('number').value,
      dueDate : this.formCard.get('dueDate').value,
      securityCode:  this.formCard.get('securityCode').value,
    }  

    this.paymentService.postCreditCard(model)
    .subscribe(x => 
      {
        if (x)
        {
            this.clientService.showMessageSuccess('Credit card added')
        }
        else
        {
          this.clientService.showMessageError("Coudn't add the card")
        }
      })
  }

  deleteCard(creditCardId: number)
  {
    const model = 
    {
      clientId     : this.clientService.getClientId(),
      creditCardId : creditCardId,
      deleted      : true,
    }
    return this.paymentService
      .putCreditCard(model)
      .subscribe
      (
        x => 
        {
          if (x)
          {
            this.clientService.showMessageSuccess('Credit card deleted')
          }
          else
          {
            this.clientService.showMessageError("Coudn't delete the card")
          }
        }
      );
  }

  postPurchase(creditCardId: number)
  {
    const model = 
    {
      clientId     : this.clientService.getClientId(),
      creditCardId : creditCardId,
      paymentTypeEnum  : 1
    }

    return this.purchaseService.postPurchase(model)
    .subscribe
    (
      x => 
      { 
        if(x)
        {
          console.log("true p")
          this.route.navigate(['/purchase/confirm']);
        }
        else
        {
          console.log("false")
        }
      }  
    ); 
  }
}