import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],

})

export class BodyComponent implements OnInit {
  //var navigator.geolocation;
  geolocationPosition;

  title: string = 'IceOnWheels map';
  lat:number;
  lng:number;
  latmarker1:number;
  lngmarker1:number;
  zoom: number = 14;

  constructor() {
  }

  markers = [
    {
      lat: 51.673858,
      lng: 7.815982
    },
    {
      lat: 51.373858,
      lng: 7.215982
    },
    {
      lat: 51.723858,
      lng: 7.895982
    },
    {
      lat: 50.910667,
      lng: 4.435452
      //François
    },
    {
      lat: 51.180322,
      lng: 4.908298
      //Seppe
    },
    {
      lat: 51.230130,
      lng: 4.416172
      //AP
    },
    {
      lat: 51.199588,
      lng: 4.475172
      //Maarten
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
}
