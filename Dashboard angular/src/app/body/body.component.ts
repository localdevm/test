import { Component, OnInit,ViewChild } from '@angular/core';
import {GeocodingApiService } from '../reversegeocoding.service';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource, MatSort} from '@angular/material';
import {HttpgetService} from "../httpget.service";


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
  completeAdress;

  Gegevens;
  dataSource;
  getdata : HttpgetService;

  constructor(public GeocodingApiService : GeocodingApiService, public http : HttpClient) {
   /*this.getdata.getDrivers().subscribe( data => {
      this.Gegevens = data;
      console.log(data);
      this.dataSource = new MatTableDataSource(this.Gegevens);
    },
     error => {console.log(error)});*/
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

  getlocation() {
    this.http.get("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAoUXMzvXuuxkZO4JimW1esV6HWvNqdmo0&latlng="
      + this.lat.toString() + "," + this.lng.toString()).subscribe(data => {
      this.currentLocation = data;
      this.streetName = this.currentLocation.results[0]['address_components'][1]['long_name'];
      this.number = this.currentLocation.results[0]['address_components'][0]['long_name'];
      this.postalCode = this.currentLocation.results[0]['address_components'][6]['short_name'];
      this.city = this.currentLocation.results[0]['address_components'][2]['long_name'];
      this.completeAdress = this.currentLocation.results[0]['formatted_address'];
      console.log(data);
      console.log("succes");
    });

  }

  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
          console.log(position),
            this.lat = position.coords.latitude,
            this.lng = position.coords.longitude
            //this.lng = position.coords.longitude
            //this.latmarker1 = this.lat + 0.005;
            //this.lngmarker1 = this.lng + 0.012;
            this.center.lng = this.lng;
            this.center.lat = this.lat;
          new TableSortingExample();

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
      this.getlocation();
    };
  }

}
export class TableSortingExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   **/
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}




