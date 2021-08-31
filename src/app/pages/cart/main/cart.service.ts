import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetCart } from './models/cart.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _products = new BehaviorSubject<GetCart[]>([]);
  public products = this._products.asObservable();

constructor(private request: HttpClient) { }

  _getCart(clientId: number)
  {
    localStorage.setItem
    return this.getCart(clientId);
  }

  private getCart(clientId: number)
  {
    return this.request
    .get<GetCart[]>(apiUrl + "/Cart/" + clientId)
    .pipe
    (
      take(1)
    );
  }

/* 
  private postCart(clientId: number, productId: number)
  {
    return this.request
    .post(apiUrl + "/Cart/" +);
  } */

 
  _deleteCart()
  {
    return this.deleteCart();
  }

  private deleteCart()
  {
    return this.request
    .delete<GetCart[]>(apiUrl + "/Cart/")
    .pipe(
      take(1)
    );
  }
}
