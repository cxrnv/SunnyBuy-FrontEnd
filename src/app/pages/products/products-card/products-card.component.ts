import { GetProduct } from '../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  products : GetProduct[] = [];

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.get();
  }

 get()
 {
   this.productsService._getProducts()
   .subscribe(product => 
    {
      this.products = product;
    })
 }
}
