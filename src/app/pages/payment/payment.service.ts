import { environment } from 'src/environments/environment';
import { CreditCard } from './models/creditcard.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ClientService } from '../client/client.service';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  id: number;
  private _creditCard = new BehaviorSubject<CreditCard[]>([]);
  public creditCard = this._creditCard.asObservable();

constructor(private http: HttpClient, private clientService: ClientService) { }

  /*------------------public------------------*/
  
  public postCreditCard(model: {clientId: number, dueDate: string, number: number,  securityCode: string, operator: string})
  {
    return this._postCreditCard(model);
  }

  public existingCards()
  {
    return this._existingCards();
  }
  
  public putCreditCard(model: {clientId: number, creditCardId: number, deleted: boolean})
  {
    return this._putCreditCard(model);
  }

  /*-----------------private-----------------*/

  private _postCreditCard(model: {clientId: number, dueDate: string, number: number,  securityCode: string, operator: string}): Observable<boolean>
  {
    return this.http.post<boolean>(apiUrl + '/CreditCard/', model)
    .pipe(
      take(1)
    );
  }

  private _putCreditCard(model: {clientId: number, creditCardId: number, deleted: boolean}) : Observable<boolean>
  {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: model
    };
    
    console.log("put")
    return this.http.delete<boolean>(apiUrl +  '/CreditCard/', options)
    .pipe
    (
      take(1)
    );
  }

  private _existingCards()
  {
    return this.http
    .get<CreditCard[]>(apiUrl + "/CreditCard/clientId/" + this.clientService.getClientId())
    .pipe(
      take(1)
    );
  }
}
