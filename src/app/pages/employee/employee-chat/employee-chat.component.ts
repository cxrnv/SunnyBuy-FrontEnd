import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from './../employee.service';
import { Client } from 'src/app/pages/client/models/client.model';
import { Message } from './../../message/models/message.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ClientService } from '../../client/client.service';
import { switchMap } from 'rxjs/operators';
import { MessageService } from '../../message/message.service';

@Component({
  selector: 'app-employee-chat',
  templateUrl: './employee-chat.component.html',
  styleUrls: ['./employee-chat.component.scss']
})

export class EmployeeChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;


  form: FormGroup = null;
  client: Client = {} as Client;
  clientId: any;
  messages: Message[] = {} as Message[];
  clients: Client[] = {} as Client[];

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private messagesService: MessageService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(
          params => {
            this.clientId = params['clientId'];
            return this.messagesService.getMessages(this.clientId)
          }))
      .subscribe(data => this.messages = data);

    this.route.params
      .pipe(
        switchMap(
          params => {
            this.clientId = params['clientId'];
            return this.clientService.getClient(this.clientId)

          }))
      .subscribe(data => this.client = data);

    this.clientService.getClients()
      .subscribe(x => {
        this.clients = x
      })

    this.form = this.createMessage();

  }

  createMessage(): FormGroup {
    return new FormGroup
      (
        {
          description: new FormControl(),
        }
      )
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  sendMessage() {
    const model =
    {
      clientId: this.clientId,
      employeeId: this.employeeService.getEmployeeId(),
      description: this.form.get('description').value,
      personTypeEnum: 1
    }

    this.messagesService
      .postMessage(model)
      .subscribe(data => {
        console.log(data)
      });
    this.scrollToBottom();
    this.messagesService.message.subscribe(data => this.messages = data);
  }
}