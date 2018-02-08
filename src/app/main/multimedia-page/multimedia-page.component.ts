import { UserDetailService } from '../../services/user-detail.service';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-multimedia-page',
  templateUrl: './multimedia-page.component.html',
  styleUrls: ['./multimedia-page.component.css']
})
export class MultimediaPageComponent implements OnInit {
  p: number = 1;
  p1: number = 1;
  constructor(private http: Http, private userDetailService: UserDetailService) { }

  socialImageURL = "http://ferrarifanclub.azurewebsites.net/#/multimedia/images/";
  socialVideoURL = "http://ferrarifanclub.azurewebsites.net/#/multimedia/videos/";

  multimediaImageURL = environment.currentServerURL + "/api/multimedia-images";
  multimediaVideoURL = environment.currentServerURL + "/api/multimedia-videos";

  multimediaImageData = [];
  multimediaVideoData = [];
  showIMG = false;
  imgDir = environment.currentServerURL;
  videoDir = environment.currentServerURL;
  imageArray = [];
  videoArray = [];
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");

    /* multimedia-data from API call */
    this.http.get(this.multimediaImageURL)
      .map(res => res.json())
      .subscribe((resp) => {
        this.imageArray = resp.data;
        if (this.userDetailService.role != 'admin') {
          this.imageArray = this.imageArray.filter((item) => {
            if (this.userDetailService.level == "III") {
              return item;
            } else if ((this.userDetailService.level == 'II') && (item.level == '2') || (item.level == '1')) {
              return item;
            } else if ((this.userDetailService.level == 'I') && (item.level == '1')) {
              return item;
            }
          });
        }
        this.assignImageData(this.imageArray);
      });

    this.http.get(this.multimediaVideoURL)
      .map(res => res.json())
      .subscribe((resp) => {
        this.videoArray = resp.data;
        if (this.userDetailService.role != 'admin') {
          this.videoArray = this.videoArray.filter((item) => {
            if (this.userDetailService.level == "III") {
              return item;
            } else if ((this.userDetailService.level == 'II') && (item.level == '2') || (item.level == '1')) {
              return item;
            } else if ((this.userDetailService.level == 'I') && (item.level == '1')) {
              return item;
            }
          });
        }
        this.assignVideoData(this.videoArray);
      });
  }

  assignImageData(MData) {
    this.multimediaImageData = MData;
    this.showIMG = true;
  }

  assignVideoData(MData) {
    this.multimediaVideoData = MData;
    this.showIMG = true;
  }
  pointsUpdate(num: number) {
    this.userDetailService.updatePoints(num);
  }
}
