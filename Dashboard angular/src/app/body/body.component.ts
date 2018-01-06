import {Component, OnInit, ViewChild} from '@angular/core';
import {GeocodingApiService} from '../_services/reversegeocoding.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatTableDataSource, MatSort} from '@angular/material';
import {HttpgetService} from "../_services/httpget.service";





@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],

})

export class BodyComponent implements OnInit {
  geolocationPosition;
  title: string = 'IceOnWheels map';
  lat: number;
  lng: number;
  zoom: number = 14;
  center;
  streetName;
  number;
  postalCode;
  city;
  geocoder;
  currentLocation;
  completeAdress;
  Driver;
  calculatedTrip;
  calculatedDistance;
  markersinrange = [];


  Gegevens;
  dataSource;


  constructor(public GeocodingApiService: GeocodingApiService, public http: HttpClient, public getdata: HttpgetService) {
    getdata.getDrivers().subscribe(data => {
      this.Gegevens = data;
      this.dataSource = new MatTableDataSource(this.Gegevens);
      //console.log(this.Gegevens);
    });
  }



  displayedColumns = ['DriverID', 'Name', 'Availibility'];

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   **/
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
      this.number = this.currentLocation.results[0]['address_components'][0]['long_name'];
      this.postalCode = this.currentLocation.results[0]['address_components'][6]['short_name'];
      this.city = this.currentLocation.results[0]['address_components'][2]['long_name'];
      this.streetName = this.currentLocation.results[0]['address_components'][1]['long_name'];
      this.completeAdress = this.currentLocation.results[0]['formatted_address'];
    });

    for(let i = 0; i < this.Gegevens.length; i++){
      this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.Gegevens[i]['adress'] 
      + "&key=AIzaSyAoUXMzvXuuxkZO4JimW1esV6HWvNqdmo0").subscribe(data => {
        console.log("mijndata");
        console.log(data);
        this.markers.push({
          "lat" : data['results'][0]['geometry']['location']['lat'],
          "lng" : data['results'][0]['geometry']['location']['lng'],
          "label" : this.Gegevens[i]['name']
        });
      })
    }
    console.log(this.markers);
  }

  calculateradius() {
    for (let i = 0; i < this.markers.length; i++) {
      this.http.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins="
        + this.completeAdress.toString() + "&destinations=" + this.markers[i].lat.toString() + "," + this.markers[i].lng.toString()
        + "&key=AIzaSyAoUXMzvXuuxkZO4JimW1esV6HWvNqdmo0",{
        headers: new HttpHeaders()
          .set('Access-Control-Allow-Origin', '*')
      }).subscribe(data => {
        this.calculatedTrip = data;
        this.calculatedDistance = data['rows'][0]['elements'][0]['distance']['value'];
        if (this.calculatedDistance < 5000000) {
          this.markersinrange.push({
            "lat": this.markers[i].lat,
            "lng": this.markers[i].lng,
            "label": this.markers[i].label,
            "locationtolodestination": this.calculatedDistance
          });
        }
      });
    }

  }
  detailsDriver(){

  }
  driversinradius() {

  }


  ngOnInit() {

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
            console.log(position),
            this.lat = position.coords.latitude,
            this.lng = position.coords.longitude
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
    }

  }
}





