import {Component, NgModule, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpgetService} from "../httpget.service";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl:'login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
 email: string = '';
 password: string = '';
  constructor(private router : Router,private authService : AuthService){}

  ngOnInit(){

  }


  onSignin(form : NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password);
  }
}
