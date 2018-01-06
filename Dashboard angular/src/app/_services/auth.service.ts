import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Router} from '@angular/router';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { AuthHttp, AuthConfig, JwtHelper,tokenNotExpired } from 'angular2-jwt-session';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  public token: string;
  public hasToken;
  private tokenExpire : Date;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: HttpClient, private router : Router) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }


  public signupUser(usertype:string,email: string, password:string,adress:string,name:string,Phonenumber:any){
    if (usertype == "0"){
      return this.http.post('http://iceonwheels20171117020935.azurewebsites.net/api/Customers',{
        email: email,
        name: name,
        pasword:password,
        adress:adress,
        Phonenumber:Phonenumber,
      })
      
    }

    else if (usertype == "1"){
      return this.http.post('http://iceonwheels20171117020935.azurewebsites.net/api/Drivers',{
        email: email,
        name: name,
        pasword:password,
        adress:adress,
        Phonenumber:Phonenumber,
      })
    }
   

  }

/*  public signinUser(email:string, password:string){

    tokenNotExpired();
    return this.http.post("http://iceonwheels20171117020935.azurewebsites.net/connect/token", {
      email: email,
      password:password
    })
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );

  }*/

  public setToken(token){
    if(token["access_token"]){
      this.token = token;
      this.tokenExpire = new Date();
      this.tokenExpire.setSeconds((token["expires_in"]));
      this.token["expires_on"] = this.tokenExpire;
      localStorage.setItem('tokenUser', JSON.stringify(this.token));

    }
  }

 public signinUser(username: string, password: string): Observable<boolean> {
    return this.http.post('http://iceonwheels20171117020935.azurewebsites.net/api/Drivers', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  public logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }
}
