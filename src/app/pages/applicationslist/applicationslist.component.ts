import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {HttpServiceService} from '../http-service.service';
import {VictimResponse} from '../VictimResponse';
import {mainNgcc} from '@angular/compiler-cli/ngcc/src/main';

@Component({
  selector: 'app-applicationslist',
  templateUrl: './applicationslist.component.html',
  styleUrls: ['./applicationslist.component.scss']
})

export class ApplicationslistComponent implements OnInit {

  response: any;
  postId = '';
  victimData: VictimResponse<any>[][] | undefined;
  constructor(private httpService: HttpServiceService) { }
  ngOnInit(): void {
    this.httpService.getVictim<any>().subscribe(
      data => {
        console.log('this.victim', data.body);
        this.victimData = data.body;
      }, err => {
        console.log(err);
      });
    }
}
