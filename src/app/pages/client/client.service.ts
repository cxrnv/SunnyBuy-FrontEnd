import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from './models/client.model';
import { Injectable } from '@angular/core';
import { take, tap, switchMap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private _clients = new BehaviorSubject<Client[]>([]);
  public clients = this._clients.asObservable();

  private _client = new BehaviorSubject<Client>(null);
  public client = this._client.asObservable();

  public getClientId() {
    return +localStorage.getItem('clientId');
  }

  constructor(private request: HttpClient, private snackBar: MatSnackBar) { }

  public showMessageAttention(message: string): void {
    const configuration = new MatSnackBarConfig();
    configuration.panelClass = ['snack-attention'];
    configuration.duration = 5000;
    configuration.horizontalPosition = "right";
    configuration.verticalPosition = "bottom";

    this.snackBar.open(message, "x", configuration)
  }

  public showMessageSuccess(message: string): void {
    const configuration = new MatSnackBarConfig();
    configuration.panelClass = ['snack-success'];
    configuration.duration = 5000;
    configuration.horizontalPosition = "left";

    this.snackBar.open(message, "undo", configuration)
  }

  public showMessageError(message: string): void {
    const configuration = new MatSnackBarConfig();
    configuration.panelClass = ['snack-error'];
    configuration.duration = 5000;
    configuration.horizontalPosition = "left";

    this.snackBar.open(message, "undo", configuration)
  }

  public postClient(model: { name: string, email: string, password: string }) {
    return this._postClient(model);
  }

  public login(model: { email: string, password: string }) {
    return this._login(model);
  }

  public editClient(model: { clientId: number, clientCpf: string, name: string, email: string, password: string, address: string, phone: string, image: string | ArrayBuffer }) {
    return this._editClient(model)
      .pipe
      (
        switchMap(() => this.getClientLoggedIn())
      );
  }

  public getClientLoggedIn() {
    return this._getClientLoggedIn()
      .pipe
      (
        tap(client => this._client.next(client))
      );
  }
  
  public getClient(clientId: number) {
    return this._getClient(clientId)
      .pipe
      (
        tap(client => this._client.next(client))
      );
  }

  public getClients(){
    return this._getAllClients();
  }

  public getClientsChat(){
    return this._getClientsChat();
  }


  public disableClient(model: { clientId: number, disabled: boolean }) {
    return this._disableClient(model);
  }

  private _postClient(model: { name: string, email: string, password: string }): Observable<boolean> {
    return this.request.post<boolean>(apiUrl + '/Client/', model)
      .pipe(
        take(1)
      );
  }

  private _editClient(model: { clientId: number, clientCpf: string, name: string, email: string, password: string, address: string, phone: string, image: string | ArrayBuffer }): Observable<boolean> {
    console.log("edit")
    return this.request.put<boolean>(apiUrl + '/Client/edit/', model)
      .pipe(
        take(1)
      );
  }

  private _login(model: { email: string, password: string }): Observable<number> {
    return this.request.post<number>(apiUrl + '/Client/login/', model)
      .pipe(
        tap(a => localStorage.setItem('clientId', a.toString())),
        take(1)
      );
  }

  private _disableClient(model: { clientId: number, disabled: boolean }): Observable<boolean> {
    return this.request.put<boolean>(apiUrl + '/Client/disable/', model)
      .pipe(
        take(1)
      );
  }

  private _getClientLoggedIn() {
    return this.request
      .get<Client>(apiUrl + '/Client/' + localStorage.getItem('clientId'))
      .pipe
      (
        take(1)
      )
  }

  private _getClient(clientId: number) {
    return this.request
      .get<Client>(apiUrl + '/Client/' + clientId)
      .pipe
      (
        take(1)
      )
  }

  private _getClientsChat()
  {
    return this.request
    .get<Client[]>(apiUrl + '/Client/clients-chat/')
    .pipe
    (
      take(1)
    )
  }

  private _getAllClients() {
    return this.request
      .get<Client[]>(apiUrl + '/Client/clients')
      .pipe
      (
        take(1)
      )
  }
}
