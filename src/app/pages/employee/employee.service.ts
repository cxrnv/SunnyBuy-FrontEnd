import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employee } from './models/employee.model';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public getEmployeeId() {
    return +localStorage.getItem('employeeId');
  }
  private _employee = new BehaviorSubject<Employee>(null);
  public employee = this._employee.asObservable();

  constructor(private http: HttpClient) { }

  public getEmployee() {
    return this._getEmployee()
      .pipe
      (
        tap(employee => this._employee.next(employee))
      );
  }

  public login(model: { email: string, password: string }) {
    return this._login(model);
  }

  private _getEmployee() {
    return this.http
    .get<Employee>(apiUrl + '/Employee/' + localStorage.getItem('employeeId'))
    .pipe
    (
      take(1)
      )
    }
    
    private _login(model: { email: string, password: string }): Observable<number> {
      return this.http.post<number>(apiUrl + '/Employee/login/', model)
        .pipe(
          tap(a => localStorage.setItem('employeeId', a.toString())),
          take(1)
        );
    }
  
}
