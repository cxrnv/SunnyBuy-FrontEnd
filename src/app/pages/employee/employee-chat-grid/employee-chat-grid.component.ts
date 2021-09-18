import { Message } from './../../message/models/message.model';
import { MessageService } from './../../message/message.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/models/client.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-chat-grid',
  templateUrl: './employee-chat-grid.component.html',
  styleUrls: ['./employee-chat-grid.component.scss']
})
export class EmployeeChatGridComponent implements OnInit {

  messages : Message[];
  clientId: any;
  clients: Client[] = {} as Client[];

  constructor(
    private clientService: ClientService,
    private messageService : MessageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .pipe(
      switchMap(
        params => {
          this.clientId = params['clientId'];
          return this.messageService.getMessages(this.clientId);
        }))
    .subscribe(data => this.messages = data);

    this.clientService.getClientsChat().subscribe(
      x => {
        this.clients = x
        console.log(x)
      })
  }
}
