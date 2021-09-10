import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Purchase } from './models/purchase.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class PurchaseService {

  private _purchase = new BehaviorSubject<Purchase[]>([]);
  public purchase = this._purchase.asObservable();

constructor(private http: HttpClient) { }

/*------------------public------------------*/

public getPurchase(clientId: number)
{
  return this._getPurchase(clientId);
}

public postPurchase(model: {clientId: number, creditCardId: number, paymentTypeEnum: number})
{
  return this._postPurchase(model);
}

/*-----------------private-----------------*/

private _postPurchase(model: {clientId: number, creditCardId: number, paymentTypeEnum: number}) : Observable<boolean>
{  
  return this.http.post<boolean>(apiUrl + '/Purchase/', model)
  .pipe
  (
    take(1)
  );
}

private _getPurchase(clientId: number)
{
  return this.http.get<Purchase>(apiUrl + '/Purchase/' + clientId)
  .pipe
  (
    take(1)
  );
}

}
