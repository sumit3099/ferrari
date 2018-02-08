import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-multimedia',
  templateUrl: './admin-multimedia.component.html',
  styleUrls: ['./admin-multimedia.component.css']
})
export class AdminMultimediaComponent implements OnInit {
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
