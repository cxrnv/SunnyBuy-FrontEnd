import { environment } from 'src/environments/environment';
import { GetComputer } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {take } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ComputersService {

  private _computers = new BehaviorSubject<GetComputer[]>([]);
  public computers = this._computers.asObservable();

  constructor(private request: HttpClient) { }

  _getcomputers()
  {
    return this.getComputers();
  }

  private getComputers()
  {
    return this.request
    .get<GetComputer[]>(apiUrl + "/Product/category/1")
    .pipe(
      take(1)
    );
  }

  _getComputerDetail(id: number)
  {
    return this.getComputerDetail(id);
  }

  private getComputerDetail(id: number)
  {
    return this.request
    .get<GetComputer>(apiUrl + "/Product/product/" + id)
    .pipe(
      take(1)
    );
  }
}