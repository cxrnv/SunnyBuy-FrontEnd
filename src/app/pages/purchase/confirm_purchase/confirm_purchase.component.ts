import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart/cart.service';
import { GetCart } from '../../cart/models/getCart.model';
import { ClientService } from '../../client/client.service';
import { Purchase } from '../models/purchase.model';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-confirm_purchase',
  templateUrl: './confirm_purchase.component.html',
  styleUrls: ['./confirm_purchase.component.scss']
})
export class Confirm_purchaseComponent implements OnInit {
  
  totalCart: number;
  cart: GetCart[];
  purchase: Purchase = {} as Purchase;

  constructor(private purchaseService: PurchaseService, private clientService: ClientService, private route: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.getPurchase();
    this.cartService.getProductsCart().subscribe();

    this.cartService.totalCart().subscribe()
    this.cartService.total.subscribe(x => {
      this.totalCart = x
    })
    this.cartService.products
      .subscribe(products => this.cart = products);
  }

  getPurchase() {
    return this.purchaseService.getPurchase(this.clientService.getClientId())
      .subscribe(data => {
        this.purchase = data;
      })
  }

  confirmPurchase() {
    const model = {
      clientId: this.clientService.getClientId(),
      purchaseId: this.purchase.purchaseId

    }

    this.purchaseService.confirmPurchase(model)
      .subscribe
      (
        this.route.navigate(['/purchase/complete'])
      );

  }
}
