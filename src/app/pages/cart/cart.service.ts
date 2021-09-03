import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetCart } from './models/getCart.model';
import { Injectable } from '@angular/core';
import { catchError, take, switchMap, tap } from 'rxjs/operators';
import { ClientService } from '../client/client.service';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _products = new BehaviorSubject<GetCart[]>([]);
  public products = this._products.asObservable();

  constructor
    (
      private request: HttpClient,
      private clientService: ClientService
    ) { }

  /*------------------public------------------*/

  public getProductsCart() {
    return this._getCartProducts()
      .pipe(
        tap(products => this._products.next(products))
      );
  }

  public postCart(model: { clientId: number, productId: number }) {
    return this._postCart(model);
  }

  public totalCart()
  {
    return this._totalCart();
  }

  public deleteProductCart(model: { cartId: number, deleted: boolean }) {
    return this._deleteProductsCart(model)
      .pipe(
        switchMap(() => this.getProductsCart())
      );
  }
  /*-----------------private-----------------*/

  private _getCartProducts() {
    return this.request
      .get<GetCart[]>(apiUrl + "/Cart/" + this.clientService.getClientId())
      .pipe
      (
        take(1)
      );
  }

  private _postCart(model: { clientId: number, productId: number }): Observable<boolean> {
    console.log(apiUrl)
    return this.request
      .post<boolean>(apiUrl + '/Cart/', model)
      .pipe
      (
        take(1),

        catchError(a => {
          throw this.clientService.showMessageError('Product already added in cart')
        })
      );
  }

  private _totalCart()
  { 
    return this.request
    .get(apiUrl + "/Cart/total/" + this.clientService.getClientId())
    .pipe
    (
      take(1)
    );
  }
  
  private _deleteProductsCart(model: { cartId: number, deleted: boolean }) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: model
    };

    return this.request
      .delete<GetCart[]>(apiUrl + '/Cart/', options)
      .pipe(
        take(1)
      );
  }
}
