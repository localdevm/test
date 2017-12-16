import {Component, NgModule, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpgetService} from "../httpget.service";


@Component({
  selector: 'app-login',
  template:`
    <div class="wrapper">
      <div class="insidewrap">
        <div class="titlediv">
          <h1 class="title">Login</h1>
        </div>
        <div class="iform">
          <form (ngSubmit)="onSubmit()" #f="ngForm">
            <div class="form-group">
            <input id="email" type="email" class="inputtext" name="email" placeholder="Email" ngModel/>
            </div>
            <div class="form-group">
            <input id="password" type="password" class="inputtext" name="password" placeholder="Password" ngModel/>
            <button type="submit" id="SendRequest" class="btn btn-primary">Login</button>
            </div>
            <p>{{email}}</p>
            <p>{{password}}</p>
            <br>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
 email: string = '';
 password: string = '';
  constructor(private router : Router){}

  ngOnInit(){

  }
}
