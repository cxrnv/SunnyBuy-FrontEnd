import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { CartService } from '../../cart/cart.service';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/models/client.model';
import { PurchaseService } from '../../purchase/purchase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix-page',
  templateUrl: './pix-page.component.html',
  styleUrls: ['./pix-page.component.scss']
})
export class PixPageComponent implements OnInit {

  code = Guid.create();
  date_time = new Date().toLocaleDateString();
  total: number;
  client: Client = {} as Client;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';
  
  constructor(private clientService: ClientService, private cartService: CartService, private purchaseService:PurchaseService, private route: Router) { }

  ngOnInit(): void 
  {
    this.clientService.getClientLoggedIn()
    .subscribe
    (
      x => {
        console.log(this.date_time)
        this.client = x
      }
    )

    this.cartService.totalCart()
    .subscribe
    (
      x => { this.total = x}
    );
  }

  postPurchasePix()
  {
    const model = 
    {
      clientId         : this.clientService.getClientId(),
      paymentTypeEnum  : 3
    }

    return this.purchaseService.postPurchaseBilletPix(model)
    .subscribe
    (
      x => 
      { 
        if(x)
        {
          console.log("true purchase / pix")
          this.route.navigate(['/purchase/confirm']);
        }
        else
        {
          console.log("false")
        }
      }  
    ); 
  }

}
