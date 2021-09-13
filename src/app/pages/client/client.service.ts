import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from './models/client.model';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ClientService 
{
  /* x Array */
  private _client = new BehaviorSubject<Client[]>([]);
  public client = this._client.asObservable();

  public getClientId(){
    return +localStorage.getItem('clientId');
  }
  
  constructor(private request: HttpClient, private snackBar: MatSnackBar) { }

  /*------------------public------------------*/
  public showMessageAttention(message: string): void
  {
    const configuration = new MatSnackBarConfig();
    configuration.panelClass = ['snack-attention'];
    configuration.duration = 5000;
    configuration.horizontalPosition = "right";
    configuration.verticalPosition = "bottom";

    this.snackBar.open(message, "x", configuration)
  }

  public showMessageSuccess(message: string): void
  {
    const configuration = new MatSnackBarConfig();
    configuration.panelClass = ['snack-success'];
    configuration.duration = 5000;
    configuration.horizontalPosition = "left";

    this.snackBar.open(message, "undo", configuration)
  }
  
  public showMessageError(message: string): void
  {
    const configuration = new MatSnackBarConfig();
    configuration.panelClass = ['snack-error'];
    configuration.duration = 5000;
    configuration.horizontalPosition = "left";

    this.snackBar.open(message, "undo", configuration)
  }

  public postClient(model: {name: string, email: string, password: string})
  {
    return this._postClient(model);
  }

  public _login(model : {email: string, password: string})
  {
    return this.login(model);
  }

  public editClient(model: { clientId: number, clientCpf: string, name: string, email: string, password: string, address: string, phone: string})
  {
    return this._editClient(model);
  }

  public getClient()
  {
    return this._getClient();
  }
  /*-----------------private-----------------*/

   private _postClient(model: {name: string, email: string, password: string}): Observable<boolean>
  {
    console.log(apiUrl)
    return this.request.post<boolean>(apiUrl + '/Client/', model)
    .pipe(
      take(1)
    );
  } 

  private _editClient(model: { clientId: number, clientCpf: string, name: string, email: string, password: string, address: string, phone: string}): Observable<boolean>
  {
    console.log("edit")
    return this.request.post<boolean>(apiUrl + '/Client/edit/', model)
    .pipe(
      take(1)
    );
  } 

  private login(model : {email: string, password: string}): Observable<number>
  {
    return this.request.post<number>(apiUrl + '/Client/login/', model)
    .pipe(
      tap(a => localStorage.setItem('clientId', a.toString())),
      take(1)
    );
  }

  private _getClient()
  {
    return this.request
    .get<Client>( apiUrl + '/Client/' + localStorage.getItem('clientId'))
    .pipe
    (
      take(1)
    )
  }
}
