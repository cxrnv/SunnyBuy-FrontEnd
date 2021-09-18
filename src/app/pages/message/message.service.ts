import { EmployeeService } from './../employee/employee.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Message } from './models/message.model';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _message = new BehaviorSubject<Message[]>([]);
  public message = this._message.asObservable();

  messages: Message[];

  constructor(
    private http: HttpClient,
    private employeeService : EmployeeService
    ) { }


  public getMessages(clientId: number) {
    return this._getMessages(clientId)
      .pipe
      (
        tap(message => this._message.next(message))
      );
  }

  public postMessage(model: { clientId: number, employeeId: number, description: string }): any {
    return this._postMessage(model)
    .pipe
      (
        switchMap(() => this.getMessages(model.clientId))
      );
  }

  private _postMessage(model: { clientId: number, employeeId: number, description: string }): Observable<boolean> {
    return this.http.post<boolean>(apiUrl + '/Message/', model)
      .pipe(
        take(1)
      );
  }

  private _getMessages(clientId: number) {
    return this.http
      .get<Message[]>(apiUrl + '/Message/' + clientId + '/' + this.employeeService.getEmployeeId())
      .pipe
      (
        take(1)
      )
  }
}
