import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';



@Injectable()
export class XmlrequestService {

options = new RequestOptions({
  method: RequestMethod.Post
});

}
