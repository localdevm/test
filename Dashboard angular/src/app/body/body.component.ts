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
