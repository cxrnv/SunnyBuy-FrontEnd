import { CartService } from './../../cart/cart.service';
import { ClientService } from 'src/app/pages/client/client.service';
import { Component, OnInit } from '@angular/core';
import { Purchase } from '../models/purchase.model';
import { PurchaseService } from '../purchase.service';
import { GetCart } from '../../cart/models/getCart.model';

@Component({
  selector: 'app-purchase_complete',
  templateUrl: './purchase_complete.component.html',
  styleUrls: ['./purchase_complete.component.scss']
})
export class Purchase_completeComponent implements OnInit {
  
  cart: GetCart[];
  purchase: Purchase = {} as Purchase;

  constructor(private purchaseService: PurchaseService, private clientService: ClientService) { }

  ngOnInit(): void  
  {
    this.getPurchase();
  }

  getPurchase()
  {
    return this.purchaseService.getPurchase(this.clientService.getClientId())
    .subscribe(data => 
      {
        console.log(data)
        this.purchase = data;
      })
  }
}
