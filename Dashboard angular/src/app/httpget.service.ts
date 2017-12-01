import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpgetService {
  constructor(private http: Http){}
  getDrivers(Drivers:any[]){
    return this.http.get('http://iceonwheels20171117020935.azurewebsites.net/api/drivers/');

  }
}
