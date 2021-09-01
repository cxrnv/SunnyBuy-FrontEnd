import { environment } from 'src/environments/environment';
import { GetProduct	 } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {take } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private _products = new BehaviorSubject<GetProduct[]>([]);
  public products = this._products.asObservable();

  constructor(private http: HttpClient) { }

  _getProducts(categoryid: number)
  {
    return this.getProducts(categoryid);
  }

  private getProducts(categoryid: number)
  {
    return this.http
    .get<GetProduct[]>(apiUrl + "/Product/category/" + categoryid)
    .pipe(
      take(1)
    );
  }

  _getProductDetail(id: number)
  {
    return this.getProductDetail(id);
  }

  private getProductDetail(id: number)
  {
    return this.http
    .get<GetProduct>(apiUrl + "/Product/product/" + id)
    .pipe(
      take(1)
    );
  }
}