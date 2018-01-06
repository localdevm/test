import {Component, NgModule, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpgetService} from "../_services/httpget.service";
import {AuthService} from "../_services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl:'login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  constructor(private router : Router,private authService : AuthService){}

  model: any = {};
  loading = false;
  error = '';

  ngOnInit(){

  }


 /* onSignin(form : NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password);

  }
*/
  login(form : NgForm) {
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password)
   // this.authService.signinUser(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/dashboard']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}
