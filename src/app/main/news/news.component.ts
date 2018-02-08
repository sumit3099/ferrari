import { UserDetailService } from '../../services/user-detail.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private http: Http, private userDetailService: UserDetailService) { }
  url: string = environment.currentServerURL + '/api/news';
  newsData = [];
  p: number = 1;
  newsUrl: string = environment.currentServerURL;
  socialNewsURL = "http://ferrarifanclub.azurewebsites.net/#/news/details/";
  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");

    $('.carousel').carousel();
   
    this.http.get(this.url)
      .map(res => res.json())
      .subscribe((resp) => {
        this.setNews(resp.data);
      })
  }

  setNews(news) {
    this.newsData = news;
  }
  pointsUpdate(num: number) {
    this.userDetailService.updatePoints(num);
  }
}
