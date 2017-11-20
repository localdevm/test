import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   /* this.http.get('api/Drivers').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['Drivers'];
    });*/
  }

}
