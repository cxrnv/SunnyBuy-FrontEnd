import { CreditCard } from './../../models/creditcard.model';
import { PaymentService } from './../../payment.service';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/pages/client/client.service';

@Component({
  selector: 'app-creditcard-header',
  templateUrl: './creditcard-header.component.html',
  styleUrls: ['./creditcard-header.component.scss']
})
export class CreditcardHeaderComponent implements OnInit {

  cards: CreditCard[];

  constructor(private paymentService: PaymentService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.getExistingsCards()
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

}