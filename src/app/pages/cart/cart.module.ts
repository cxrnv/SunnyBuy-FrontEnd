import { HomeModule } from './../home/home.module';
import { CartPageComponent } from './cart-page.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CartHeaderComponent,
    CartPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    HomeModule
  ],
  exports:
    [
      CartHeaderComponent,
      CartPageComponent
    ]
})
export class CartModule { }
