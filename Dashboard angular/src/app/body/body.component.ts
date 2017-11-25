import { Component, OnInit } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // var navigator.geolocation;
  geolocationPosition;
  title: string = 'IceOnWheels map';
  lat:number;
  lng:number;
  zoom: number = 14;

  constructor() {
  }


  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition
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
