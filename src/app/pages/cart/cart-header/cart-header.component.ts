import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientService } from '../../client/client.service';
import { GetCart } from '../models/getCart.model';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit, OnDestroy {

  productsCart: GetCart[];
  totalCart: number;
  clientId: number;
  cart: GetCart[];

  private subscriptions: Subscription[] = [];

  constructor(private cartService: CartService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.getProductsCart();
    this.getTotalCart();

    // Refresh observables
    this.cartService.products.subscribe(products => {
      this.cart = products
    });

    this.cartService.total.subscribe(cartTotal => {
      this.totalCart = cartTotal
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  delete(cartId: number) {
    const model =
    {
      cartId,
      deleted: true,
    }

    this.subscriptions
      .push(this.cartService.deleteProductCart(model).subscribe(x => {
        if (x) {
          this.clientService.showMessageAttention("Product deleted successfully");
        }
      }))
  }

  getProductsCart() {
    this.subscriptions
      .push(this.cartService.getProductsCart().subscribe(x => {
        this.productsCart = x;
      }))
  }

  getTotalCart() {
    this.subscriptions
      .push(this.cartService.totalCart().subscribe(x => {
        this.totalCart = x;
      }))
  }
}
