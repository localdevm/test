import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpgetService {
  constructor(private http: HttpClient){}

  public getDrivers(){
    {return this.http.get('http://iceonwheels20171117020935.azurewebsites.net/api/drivers');
  }
}
}
