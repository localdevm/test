import {Component, OnInit} from '@angular/core';
import {HttpreqService } from '../httpreq.service';
import {sendRequest} from "selenium-webdriver/http";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{

  Drivers= [
    {
      Name: 'joske',
      Adress: 'Bloemenlaan 12',
      Availibility: true,
      Phonenumber: '0473586758'

    }
  ];

//  constructor(private httpreqservice : HttpreqService){}
  constructor(private http : HttpClient){}
  onAddDriver(name: string, adress : string, availibility: boolean, phonenumber: string) {
    this.Drivers.push({
      Name: name,
      Adress: adress,
      Availibility: availibility,
      Phonenumber: phonenumber
    });
  }
  /*  onSave()
    {
      this.httpreqservice.storeDrivers(this.Drivers)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
    }*/


  ngOnInit(): void {
    this.http.get('api/Drivers').subscribe(data =>{
      this.Drivers = data['Drivers'];
    })
  }
}
