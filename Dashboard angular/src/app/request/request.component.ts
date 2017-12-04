import {Component, OnInit} from '@angular/core';
import {HttpreqService } from '../httpreq.service';
import {HttpgetService} from '../httpget.service'
import {sendRequest} from "selenium-webdriver/http";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{

  Gegevens

  constructor(public getdata : HttpgetService){
    //this.Gegevens = getdata.getDrivers();
    this.getdata.getDrivers().subscribe(data => {
      this.Gegevens = data;
    });
    
  }

  Drivers= [
    {
      Name: 'joske',
      Adress: 'Bloemenlaan 15',
      Availibility: true,
      Phonenumber: '0473586758'

    }
  ];

  
  onAddDriver(name: string, adress : string, availibility: boolean, phonenumber: string) {
    this.Drivers.push({
      Name: name,
      Adress: adress,
      Availibility: availibility,
      Phonenumber: phonenumber
    });
  }


  ngOnInit(): void {
    //this.http.get('http://iceonwheels20171117020935.azurewebsites.net/api/drivers').subscribe(data =>{
      //this.Gegevens = data['Drivers'];
    //})
    
  }
}
