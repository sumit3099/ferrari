import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import { UserDetailService } from '../../../services/user-detail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private http: Http,
    private _data: UserDetailService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private fb: FormBuilder) { }

  socialImageURL = "http://ferrarifanclub.azurewebsites.net/#/multimedia/images/";

  imageDetails;
  show = false;
  imgURL;
  comment = "";
  postCommentURL = environment.currentServerURL + "/api/postComment";
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");

    this.route.params.subscribe((params) => {
      this.getImageDetails(params.multimediaId);
    });
  }


  getImageDetails(multimediaId) {
    /* multimedia-data from API call */
    let multimediaURL = environment.currentServerURL + "/api/multimedia-images/image?multimediaId=" + multimediaId;
    this.http.get(multimediaURL)
      .map(res => res.json())
      .subscribe((resp) => {
        this.assignData(resp);
      });
  }

  assignData(resp) {
    this.imageDetails = resp.data;
    this.imgURL = this.imageDetails.url;
    this.show = true;
    var desc = <HTMLInputElement>document.getElementById("desc");
    desc.innerHTML = this.imageDetails.description;
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
        multimediaId: this.imageDetails.multimediaId
      })
        .map((res) => res.json())
        .subscribe((response) => {
          this.getImageDetails(this.imageDetails.multimediaId);
        });
    }
  }
  pointsUpdate(num: number) {
    this._data.updatePoints(num)
  }

}
