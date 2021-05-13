import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-applicationslist',
  templateUrl: './applicationslist.component.html',
  styleUrls: ['./applicationslist.component.scss']
})


// const options = {
//   header: new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: 'Basic ' + btoa('test:test')
//   }),
// };

export class ApplicationslistComponent implements OnInit {

  response: any;

  constructor(private http: HttpClient) { }



  ngOnInit(): void {

    this.http.get('http://10.105.200.111:6169/forex-auction/application/list',  )
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });

    }



}
