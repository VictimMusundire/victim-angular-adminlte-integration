import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-applicationslist',
  templateUrl: './applicationslist.component.html',
  styleUrls: ['./applicationslist.component.scss']
})

export class ApplicationslistComponent implements OnInit {

  response: any;
  postId = '';
  constructor() { }
  ngOnInit(): void {
  }
}
