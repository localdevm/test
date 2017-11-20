import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpreqService {
  constructor(private http: Http){}
  storeDrivers(Drivers:any[]){
    return this.http.post('http://localhost:59302/api/drivers/',Drivers);

  }
}
