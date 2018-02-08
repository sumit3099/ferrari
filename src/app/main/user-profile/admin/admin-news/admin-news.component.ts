import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  constructor() { }
componentvalue=0;
  ngOnInit() {
     $('ul.tabs').tabs();
  }
  valueChange(val)
  {
    this.componentvalue=val;
  }
}
