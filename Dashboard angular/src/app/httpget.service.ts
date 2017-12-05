import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpgetService {

  constructor(private http: Http) {
  }

  getDrivers(Drivers: any[]) {
    return this.http.get('http://iceonwheels20171117020935.azurewebsites.net/api/drivers/');

    constructor(private http: HttpClient)
    {

    }

  public getDrivers()
    {
      return this.http.get('http://iceonwheels20171117020935.azurewebsites.net/api/drivers');
      //return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }

    public getAdressLocation(Location : any[])

    {
      return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=51.2228618,4.3161537999999995&location_type=ROOFTOP&result_type=street_address&key=AIzaSyAoUXMzvXuuxkZO4JimW1esV6HWvNqdmo0<')
    }
  }
}
