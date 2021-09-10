import { CartService } from './../../../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/pages/client/client.service';
import { Client } from 'src/app/pages/client/models/client.model';

@Component({
  selector: 'app-billet-header',
  templateUrl: './billet-header.component.html',
  styleUrls: ['./billet-header.component.scss']
})
export class BilletHeaderComponent implements OnInit {

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
