import { Component, OnInit } from '@angular/core';
import {GeocodingApiService } from '../reversegeocoding.service'
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
  zoom: number = 14;
  center;
  address = 'waterstraat 66';
  postalCode;
  geocoder;
  selectedPlace;

  constructor(private GeocodingApiService : GeocodingApiService ){

  }


  /*markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]
*/

  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
          console.log(position),
            this.lat = position.coords.latitude,
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
    console.log("getting location")
    this.GeocodingApiService
      .findFromCoordinates(this.lat, this.lng).subscribe(res => console.log(res),
      error => {console.log("something went wrong")});

  }

}
