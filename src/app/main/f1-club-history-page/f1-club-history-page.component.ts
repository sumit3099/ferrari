import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f1-club-history-page',
  templateUrl: './f1-club-history-page.component.html',
  styleUrls: ['./f1-club-history-page.component.css']
})
export class F1ClubHistoryPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");

    $('.materialboxed').materialbox();
  }

}
