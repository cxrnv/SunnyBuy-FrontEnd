import { Client } from 'src/app/pages/client/models/client.model';
import { Component, OnInit } from '@angular/core';
import { chatMessages } from './chat-messages';
import { ClientService } from '../../client/client.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages = [];
  totalOnline = 0;
  user = 1;
  clients: Client[] = {} as Client[];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.messages = chatMessages;
    this.clientService.getClients().subscribe(x => 
      {
        this.clients = x
      })
  }

  sendMessage(message) {
    const nd = new Date;
    const data = {
      message,
      userId: this.user,
      time: nd.getHours() + ":" + nd.getMinutes()
    };

    this.messages = [...this.messages, data];
  }
}
