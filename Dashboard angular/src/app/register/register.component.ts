import { Component, OnInit, Inject } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../_services/auth.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RegDialogComponent } from '../reg-dialog/reg-dialog.component';

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
    const name = form.value.name;
    const usertype = form.value.usertype;

    this.authService.signupUser(usertype,email,password,adress,name,phonenumber).subscribe(data =>{
      if(data){
        this.authService.setToken(data);
        console.log(data);

      }
      error => {console.log(error)}
    });
  }

}
