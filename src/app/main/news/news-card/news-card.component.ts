import { UserDetailService } from '../../../services/user-detail.service';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  constructor(private http: Http, private route: ActivatedRoute, private userDetailService: UserDetailService) { }

  show: boolean = false;
  newsDetails = { title: "", description: "" };
  newsImageUrl = environment.currentServerURL;
  socialNewsURL = "";

  ngOnInit() {
    $('.materialboxed').materialbox();
    this.route.params.subscribe((params) => {
      this.getVideoDetails(params.newsId);
      this.socialNewsURL = "http://ferrarifanclub.azurewebsites.net/#/news/details/" + params.newsId;
    });
  }
  getVideoDetails(newsId) {
    let newsURL = environment.currentServerURL + "/api/news/details?newsId=" + newsId;
    this.http.get(newsURL)
      .map(res => res.json())
      .subscribe((resp) => {
        this.assignData(resp.data);
      });
  }
  assignData(resp) {
    this.newsDetails = resp;
    this.show = true;
    var desc = <HTMLInputElement>document.getElementById("desc");
    desc.innerHTML = this.newsDetails.description;
  }
  pointsUpdate(num: number) {
    this.userDetailService.updatePoints(num);
  }
}
