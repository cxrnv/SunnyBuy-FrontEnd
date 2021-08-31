import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../main/client.service';
import { Client } from '../../main/models/client.model';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {

  client : Client;
  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    this.get();
  }

  
 get()
 {
   this.clientService._getClient()
   .subscribe(data => 
    {
      this.client = data;
    })
 }
}
