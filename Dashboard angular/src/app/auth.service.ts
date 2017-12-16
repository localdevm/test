import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  signupUser(email: string, password:string,adress:string,Phonenumber:any){
    this.http.post('http://iceonwheels20171117020935.azurewebsites.net/api/Drivers',{
      email: email,
      pasword:password,
      adress:adress,
      Phonenumber:Phonenumber,
    })
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log("Error occured");
        }
      );
  }

getToken(){
    return this.http.get('http://iceonwheels20171117020935.azurewebsites.net/api/Drivers')
}
}
