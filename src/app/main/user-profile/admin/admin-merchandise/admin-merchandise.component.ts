import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-merchandise',
  templateUrl: './admin-merchandise.component.html',
  styleUrls: ['./admin-merchandise.component.css']
})
export class AdminMerchandiseComponent implements OnInit {

  constructor() { }
componentvalue=0;
  ngOnInit() {
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
  }
 valueChange(val)
  {
    this.componentvalue=val;
  }
}
