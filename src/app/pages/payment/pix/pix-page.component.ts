import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/models/client.model';

@Component({
  selector: 'app-pix-page',
  templateUrl: './pix-page.component.html',
  styleUrls: ['./pix-page.component.scss']
})
export class PixPageComponent implements OnInit {

  date_time = new Date().toLocaleDateString();
  total: number;
  client: Client = {} as Client;
  
  constructor(private clientService: ClientService, private cartService: CartService) { }

  ngOnInit(): void {
    this.clientService.getClient()
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

}
