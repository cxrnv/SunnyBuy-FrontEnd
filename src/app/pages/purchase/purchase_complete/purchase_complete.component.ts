import { ClientService } from 'src/app/pages/client/client.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetCart } from '../../cart/models/getCart.model';
import { PurchaseService } from '../purchase.service';
import { Purchase } from '../models/purchase.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-purchase_complete',
  templateUrl: './purchase_complete.component.html',
  styleUrls: ['./purchase_complete.component.scss']
})
export class Purchase_completeComponent implements OnInit, OnDestroy {

  cart: GetCart[];
  purchase: Purchase = {} as Purchase;
  private subscriptions: Subscription[] = [];

  constructor(private purchaseService: PurchaseService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.getPurchase();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  getPurchase() {
    this.subscriptions
      .push
      (

        this.purchaseService.getPurchase(this.clientService.getClientId())
          .subscribe(data => {
            console.log(data)
            this.purchase = data;
          })
      )
  }
}
