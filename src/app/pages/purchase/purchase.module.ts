import { RouterModule } from '@angular/router';
import { HomeModule } from './../home/home.module';
import { Purchase_completeComponent } from './purchase_complete/purchase_complete.component';
import { Confirm_purchaseComponent } from './confirm_purchase/confirm_purchase.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreditCardMaskModule } from 'src/app/core/pipes/credit-card/CreditCardMask.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    MatGridListModule,
    CreditCardMaskModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [
    PurchaseComponent,
    Confirm_purchaseComponent,
    Purchase_completeComponent,
  ]
})

export class PurchaseModule { }
