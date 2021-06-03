import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getVictim<Y>() {
    return this.http.get<Y>(`https://jsonplaceholder.typicode.com/posts`);
  }
}
