import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
@Component({
  selector: 'app-leaderboard-section',
  templateUrl: './leaderboard-section.component.html',
  styleUrls: ['./leaderboard-section.component.css']
})
export class LeaderboardSectionComponent implements OnInit {

  constructor(private http: Http) { }

  max = 0;
  uri = environment.currentServerURL + '/api/leaderboard';
  newsURL: string = environment.currentServerURL + '/api/news';
  data = [];
  newsData: any;
  show = false;

  ngOnInit() {
    this.http.get(this.uri)
      .map((res) => res.json())
      .subscribe((response) => {
        if (response.data) {
          this.data = response.data;
          this.max = this.data[0].points;
        }
      });


    this.http.get(this.newsURL)
      .map(res => res.json())
      .subscribe((resp) => {
        this.setNews(resp.data);
      })
  }
  setNews(news) {
    this.newsData = news;
    this.show = true;
  }
}