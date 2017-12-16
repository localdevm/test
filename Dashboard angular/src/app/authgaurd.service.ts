import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthgaurdService implements CanActivate {

  constructor(private authenticationService: AuthService) {
  }

  public canActivate() {
    if (localStorage.getItem('tokenUser')) {
      return true;
    }

  }
}
