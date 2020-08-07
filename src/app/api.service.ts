import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Item {
  title: string;
  url: string;
}

@Injectable( {
  providedIn: 'root'
} )


export class ApiService {
  private dataUrl = 'https://api.hnpwa.com/v0/news/1.json';
  constructor( private httpClient: HttpClient ) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.dataUrl);
  }
}
