import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Router} from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AuthService {

  public hasToken;
  public token;
  private tokenExpire : Date;

  constructor(private http: HttpClient, private router : Router) {
    if(localStorage.getItem('tokenUser')){
      this.token = JSON.parse(localStorage.getItem('tokenUser'));
    }
  }

  public setToken(token){
    if(token["access_token"]){
      this.token = token;
      this.tokenExpire = new Date();
      this.tokenExpire.setSeconds((token["expires_in"]));
      this.token["expires_on"] = this.tokenExpire;
      localStorage.setItem('tokenUser', JSON.stringify(this.token));

    }
  }

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

  public isTokenExpired(){
    if(this.token){
      var now = new Date();
      var expiredate = new Date(this.token["expires_on"])

      if( now > expiredate){
        return true
      }
      else return false

    }
  }

  public getToken(){
    return this.token
  }

  public logout(): void {
    this.token = null;
    localStorage.removeItem('tokenUser');
    this.router.navigateByUrl('/login');
  }
}
