import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel();
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }
}
