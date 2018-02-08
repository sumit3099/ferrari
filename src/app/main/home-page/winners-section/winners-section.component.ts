import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-winners-section',
  templateUrl: './winners-section.component.html',
  styleUrls: ['./winners-section.component.css']
})
export class WinnersSectionComponent implements OnInit {
  winnersURL = "https://ergast.com/api/f1/2017/driverStandings.json?limit=3";
  winnerDetails = [];

  constructor() { }

  ngOnInit() {
    Observable.fromPromise(
      fetch(this.winnersURL)
        .then((resp) => resp.json())
    )
      .subscribe((e) => {
        this.getRaces(e.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      })
    $('.carousel').carousel();

  }
  getRaces(races) {
    this.winnerDetails = races;
  }
}

