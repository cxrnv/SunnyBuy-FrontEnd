import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Client } from './models/client.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClientService 
{

  id: number;
  private _client = new BehaviorSubject<Client[]>([]);
  public client = this._client.asObservable();
  
constructor(private request: HttpClient) { }

  _postClient(model: {name: string, email: string, password: string})
  {
    return this.postClient(model);
  }

   private postClient(model: {name: string, email: string, password: string}): Observable<boolean>
  {
    console.log(apiUrl)
    return this.request.post<boolean>(apiUrl + '/Client/', model)
    .pipe(
      take(1)
    );
  } 

  _login(model : {email: string, password: string})
  {
    return this.login(model);
  }

  private login(model : {email: string, password: string}): Observable<number>
  {
    console.log('url: login: '+ apiUrl)
    return this.request.post<number>(apiUrl + '/Client/login/', model)
    .pipe(
      tap(a => this.id = a),
      take(1)
    );
    console.log();
  }

  _getClient()
  {
    return this.getClient();
  }

  private getClient()
  {
    return this.request
    .get<Client>(apiUrl + "/Client/11")
    .pipe
    (
      take(1)
    );
  }
}
