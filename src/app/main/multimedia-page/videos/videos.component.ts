import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from "@angular/router";
// import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDetailService } from '../../../services/user-detail.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private http: Http,
    private _data: UserDetailService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private fb: FormBuilder) { }

  socialVideoURL = "http://ferrarifanclub.azurewebsites.net/#/multimedia/videos/";

  videoDetails;
  show = false;
  commentForm: FormGroup;
  comment = "";
  postCommentURL = environment.currentServerURL + "/api/postComment";
  videoUrl:any;
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");

    this.route.params.subscribe((params) => {
      this.getVideoDetails(params.multimediaId);
    });
  }


  /* multimedia-data from API call */
  getVideoDetails(multimediaId) {
    let multimediaURL = environment.currentServerURL + "/api/multimedia-videos/video?multimediaId=" + multimediaId;
    this.http.get(multimediaURL)
      .map(res => res.json())
      .subscribe((resp) => {
        this.assignData(resp);
      });
  }

  assignData(resp) {
    this.videoDetails = resp.data;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoDetails.url);
    this.show = true;
    var desc = <HTMLInputElement>document.getElementById("desc");
    desc.innerHTML = this.videoDetails.description;
    // console.log(this.videoDetails.description)
  }

  postComment() {
    let tempComment = this.comment;
    this.comment = "";
    if (tempComment.length == 0) {
      Materialize.toast('Please Enter Something Before Comment !', 4000, "red");
    }
    else {
      this.http.post(this.postCommentURL, {
        userName: this._data.name,
        userId: this._data.email,
        comment: tempComment,
        multimediaId: this.videoDetails.multimediaId
      })
        .map((res) => res.json())
        .subscribe((response) => {
          this.getVideoDetails(this.videoDetails.multimediaId);
        });
    }
  }
  pointsUpdate(num: number) {
    this._data.updatePoints(num);
  }
}