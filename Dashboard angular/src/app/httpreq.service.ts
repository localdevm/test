import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpreqService {
  constructor(private http: Http){}
  storeDrivers(Drivers:any[]){
    return this.http.post('http://iceonwheels20171117020935.azurewebsites.net/api/drivers',Drivers);

  }
}
