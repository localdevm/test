import { Component, OnInit } from '@angular/core';
import {GeocodingApiService } from '../reversegeocoding.service'
import {XmlrequestService} from "../xmlrequest.service"
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],

})
export class BodyComponent implements OnInit {

  geolocationPosition;

  title: string = 'IceOnWheels map';
  lat:number;
  lng:number;
  latmarker1:number;
  lngmarker1:number;
  label:string;
  zoom: number = 14;
  center;
  streetName;
  number;
  postalCode;
  city;
  geocoder;
  selectedPlace;
  currentLocation;

  constructor(private GeocodingApiService : GeocodingApiService, private http : HttpClient ){

  }
  
  markers = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: "test"
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: "test"
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: "test"
    },
    {
      lat: 50.910667,
      lng: 4.435452,
      label: "François"
    },
    {
      lat: 51.180322,
      lng: 4.908298,
      label: "Seppe"
    },
    {
      lat: 51.230130,
      lng: 4.416172,
      label: "AP Hogeschool"
    },
    {
      lat: 51.199588,
      lng: 4.475172,
      label: "Maarten"
    }
  ]


  ngOnInit() {

   


    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
          console.log(position),
            this.lat = position.coords.latitude,
            this.lng = position.coords.longitude         
            this.lng = position.coords.longitude
            this.latmarker1 = this.lat + 0.005;
            this.lngmarker1 = this.lng + 0.012;
            this.center.lng = this.lng;
            this.center.lat = this.lat;


          error => {
            switch (error.code) {
              case 1:
                console.log('Permission Denied');
                break;
              case 2:
                console.log('Position Unavailable');
                break;
              case 3:
                console.log('Timeout');
                break;
            }
          }
        })
    };
  }

  getlocation() {
    //console.log("getting location")
    //this.GeocodingApiService
      //.findFromCoordinates(this.lat, this.lng).subscribe(res => this.currentLocation = res,
      //.findFromCoordinates(this.lat, this.lng).subscribe(res => console.log(res),
      //error => {console.log("something went wrong")});
      //console.log("Locatie werd opgevraagd!" + this.currentLocation);


  this.http.get("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAoUXMzvXuuxkZO4JimW1esV6HWvNqdmo0&latlng=" 
    + this.lat.toString() + "," + this.lng.toString()).subscribe(data => {
      this.currentLocation = data;
      this.streetName = this.currentLocation.results[0]['address_components'][1]['long_name']
      this.number = this.currentLocation.results[0]['address_components'][0]['long_name']
      this.postalCode = this.currentLocation.results[0]['address_components'][6]['short_name']
      this.city = this.currentLocation.results[0]['address_components'][2]['long_name']
      });

  }

}
