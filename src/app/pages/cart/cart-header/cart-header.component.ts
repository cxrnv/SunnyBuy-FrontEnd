import { GetCart } from '../models/getCart.model';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ClientService } from '../../client/client.service';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {

  totalCart : number;
  clientId: number;
  cart: GetCart[];

  constructor(private cartService: CartService, private clientService: ClientService) { }

  ngOnInit(): void 
  {
    this.cartService.getProductsCart().subscribe();

    this.cartService.products
    .subscribe(products => this.cart = products);
    this.total();
  }

  total()
  {
    return this.cartService.totalCart()
    .subscribe(x => this.totalCart = +x);
  }

   delete(cartId: number)
  {
    const model = 
  {
    cartId,
    deleted : true,
   }
    return this.cartService.deleteProductCart(model)
    .subscribe
    ( a=> 
      {
        if(a)
        {
          this.clientService.showMessageAttention("Product deleted successfully");
        }
      } 
    );
  }
}
