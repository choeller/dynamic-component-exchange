import { Injectable } from '@angular/core';
import {AbstractDataService} from './abstract-data.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersDataService implements AbstractDataService{

  constructor(private http: HttpClient) { }

  loadData(q: string): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
