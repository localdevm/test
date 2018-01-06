import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GeocodingApiService {

  API_KEY: string = "AIzaSyAoUXMzvXuuxkZO4JimW1esV6HWvNqdmo0";
  API_URL: string = "https://maps.googleapis.com/maps/api/geocode/json";

  constructor(private http: Http) {}


  findFromCoordinates(lat: number, lng: number){

    let coordstring =  lat + "," + lng;

    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.API_KEY);
    params.set('latlng', coordstring );

    return this.http.get(this.API_URL+"?key=" + this.API_KEY+"&latlng=" + coordstring );

  }
}
