import { Employee } from './../../employee/models/employee.model';
import { Client } from 'src/app/pages/client/models/client.model';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../client/client.service';
import { EmployeeService } from '../../employee/employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../../message/message.service';
import { Message } from '../../message/models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  employee : Employee = {} as Employee;
  form: FormGroup = null;
  client: Client = {} as Client;
  clientId: any;
  messages: Message[] = {} as Message[];
  clients: Client[] = {} as Client[];

  constructor(
    private clientService: ClientService,
    private messagesService: MessageService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.messagesService.getMessages(this.clientService.getClientId()).subscribe(x=> this.messages = x );
    this.messagesService.message.subscribe(data => this.messages = data);
    this.form = this.createMessage();
    this.employeeService.getEmployee().subscribe(data => this.employee = data);
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
      clientId: this.clientService.getClientId(),
      employeeId: 1,
      description: this.form.get('description').value,
      personTypeEnum: 2
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