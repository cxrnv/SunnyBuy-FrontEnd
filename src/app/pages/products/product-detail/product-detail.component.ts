import { ClientService } from '../../client/client.service';
import { ProductsService } from '../products.service';
import { CartService } from '../../cart/cart.service';
import { GetProduct } from '../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  details: string[];
  id: any;
  product : GetProduct;

  constructor
  (
    private productsService : ProductsService, 
    private route: ActivatedRoute, 
    private cartService : CartService,
    private clientService : ClientService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.get();
  }

 get()
 {
   this.productsService.getProductDetail(this.id)
   .subscribe(detail => 
    {
      this.product = detail;
      this.details = this.product.detail.split(";");
    })
 }

 addCart()
 {
  const model = {
    clientId: this.clientService.getClientId(), 
    productId: this.id
  };

  this.cartService.postCart(model)
  .subscribe
  ( a => 
    {
      this.clientService.showMessageSuccess('Product added with success');
    }
  );
 }
}
