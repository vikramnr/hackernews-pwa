import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Item } from './api.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit {
  title = 'hackernews-pwa';
  items: Array<any>;
  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getData().subscribe( items => {
      this.items = items;
    }, (err) => {
      console.log(err);
    } );
  }
}
