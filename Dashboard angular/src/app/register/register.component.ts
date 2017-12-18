import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService, ) { }

  ngOnInit() {
  }
  router: Router
 public onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    const adress = form.value.adress;
    const phonenumber = form.value.Phonenumber;

    this.authService.signupUser(email,password,adress,phonenumber).subscribe(data =>{
      if(data){
        this.authService.setToken(data);
        console.log(data)

      }
      error => {console.log(error)}
    });
  }

}
