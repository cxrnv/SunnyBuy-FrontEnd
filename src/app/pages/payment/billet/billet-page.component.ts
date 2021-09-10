import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart/cart.service';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/models/client.model';
import { PurchaseService } from '../../purchase/purchase.service';

@Component({
  selector: 'app-billet-page',
  templateUrl: './billet-page.component.html',
  styleUrls: ['./billet-page.component.scss']
})
export class BilletPageComponent implements OnInit {

  code = Math.random();
  date_time = new Date().toLocaleDateString();
  total: number;
  client: Client = {} as Client;

  constructor(private clientService: ClientService, private cartService: CartService, private purchaseService : PurchaseService, private route: Router) { }

  ngOnInit(): void 
  {
    this.clientService.getClient()
    .subscribe
    (
      x => {
        console.log(this.date_time)
        this.client = x
      }
    )

    this.cartService.totalCart()
    .subscribe
    (
      x => { this.total = x}
    );
  }

  postPurchaseBillet()
  {
    const model = 
    {
      clientId         : this.clientService.getClientId(),
      paymentTypeEnum  : 2
    }

    return this.purchaseService.postPurchaseBilletPix(model)
    .subscribe
    (
      x => 
      { 
        if(x)
        {
          console.log("true purchase / billet")
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
