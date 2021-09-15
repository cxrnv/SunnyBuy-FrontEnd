import { environment } from './../../../environments/environment';
import { Category } from './models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  id: number;
  private _category = new BehaviorSubject<Category[]>([]);
  public category = this._category.asObservable();

  constructor(private http: HttpClient) { }

  public getCategory()
  {
    return this._getCategory();
  }

  private _getCategory() {
    return this.http
      .get<Category[]>(apiUrl + "/category/")
      .pipe(
        take(1)
      );
  }
}
