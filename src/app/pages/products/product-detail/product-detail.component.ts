import { GetProduct } from '../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product : GetProduct;

  constructor(private productsService : ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.get();
  }

 get()
 {
   this.productsService._getProductDetail(this.id)
   .subscribe(detail => 
    {
      this.product = detail;
    })
 }
}
