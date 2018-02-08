import { environment } from './../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  constructor(private http: Http, private route: ActivatedRoute) { }
  details: {};
  show = false;
  standings: any;
  races: any;
  LineChartData: {};
  p: number = 1;
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
    // $('.materialboxed').materialbox();
    this.route.params.subscribe((params) => {
      this.getTeamDetail(params.teamId);
    });
  }
  getTeamDetail(teamId) {
    let uri = environment.currentServerURL + "/api/teams/" + teamId;
    this.http.get(uri)
      .map(resp => resp.json())
      .subscribe((resp) => {
        this.details = resp.data.details;
        this.standings = resp.data.standings;
        this.races = resp.data.races;
        this.show = true;
        $('.collapsible').collapsible({ accordion: true });
        /* calling line chart Draw after complete data fetch */
        this.drawLineChart();
      });
  }

  /* Line Chart Code below */
  drawLineChart() {
    let year = [];
    let points = [];
    let position = [];
    let wins = [];
    for (let x of this.standings) {
      year.push(x._id.season);
      points.push(x.ConstructorStandings[0].points);
      position.push(x.ConstructorStandings[0].position)
      wins.push(x.ConstructorStandings[0].wins)
    }
    this.LineChartData = {
      labels: year,
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
        },
        {
          label: 'Wins',
          data: wins,
          fill: false,
          borderColor: '#ff0000',
          backgroundColor: '#ff4d4d',
        }
      ]
    }
  }
}
