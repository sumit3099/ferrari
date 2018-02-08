import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-season-deatils',
  templateUrl: './season-deatils.component.html',
  styleUrls: ['./season-deatils.component.css']
})
export class SeasonDeatilsComponent implements OnInit {

  constructor(private http: Http, private route: ActivatedRoute) {

  }

  seasonURL = environment.currentServerURL + "/api/seasons/season-details/";
  allRounds: any;
  selectedRound: any;
  show = false; 
  LineChartData:any;

  ngOnInit() {
$('select').material_select();

    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");

    /* getting season from url and calling the api */
    this.route.params.subscribe((params) => {
      this.getSeasonDetails(params.season);
    });
  }

  getSeasonDetails(season) {
    this.http.get(this.seasonURL + season)
      .map(resp => resp.json())
      .subscribe((resp) => {
        this.assignValues(resp);
      })
  }

  assignValues(resp) {
    this.allRounds = resp.data;
    this.selectedRound = this.allRounds[0];
    this.show = true;
    this.drawLineChart();
  }

  selectRound(x){
    let round = x.target.value;
    this.selectedRound = this.allRounds[round-1];
    this.drawLineChart();
  }

  /* Line Chart Code below */
  drawLineChart() {
    let driver = [];
    let points = [];
    let position = [];
    for (let x of this.selectedRound.result) {
      driver.push(x.driverId);
      points.push(x.points);
      position.push(x.position)
    }
    this.LineChartData = {
      labels: driver,
      datasets: [
        {
          label: 'Points',
          data: points,
          fill: false,
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
        },
        {
          label: 'Position',
          data: position,
          fill: false,
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
        }
      ]
    }
  }

}
