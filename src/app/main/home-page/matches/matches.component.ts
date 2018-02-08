import { environment } from './../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  showHeaderImage = false;
  showMore: boolean = true;
  url: string = environment.currentServerURL + '/api/upcoming_races';
  allMatches = [];
  matches = [];
  flag = false;

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");

    if (this.route.snapshot.url.length == 1)
      this.showHeaderImage = true;
    Observable.fromPromise(
      fetch(this.url)
        .then((resp) => resp.json())
    )
      .subscribe((e) => {
        this.upcomingMatches(e);
      })
  }
  upcomingMatches(matches) {

    this.allMatches = matches;
    this.matches = this.allMatches.slice(0, 6);
    this.flag = true;

  }
  viewMore() {
    this.matches = this.allMatches.slice();
    this.showMore = false;
  }
  viewMMMM() {
    this.matches = this.allMatches.slice(0, 6);
    this.showMore = true;
    $("html, body").animate({ scrollTop: $('#scrollUp').offset().top - 70 }, "slow");
  }
}
