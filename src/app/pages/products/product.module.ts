import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsComponent } from './products.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { HomeModule } from '../home/home.module';

@NgModule({
    imports: [
        HomeModule,
        CommonModule,
        RouterModule,
    ],
    declarations: [
        ProductDetailComponent,
        ProductsCardComponent,
        ProductsComponent,
        ProductsCategoryComponent
    ],
    exports:
        [
            ProductDetailComponent,
            ProductsCardComponent,
            ProductsComponent,
            ProductsCategoryComponent
        ]
})

export class ProductsModule { }