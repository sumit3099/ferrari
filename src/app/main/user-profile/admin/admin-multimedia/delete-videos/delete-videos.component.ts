import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
@Component({
  selector: 'app-delete-videos',
  templateUrl: './delete-videos.component.html',
  styleUrls: ['./delete-videos.component.css']
})
export class DeleteVideosComponent implements OnInit {

  constructor(private http: Http) { }
  // declare var Materialize:any;
  multimediaVideoURL = environment.currentServerURL + "/api/multimedia-videos";
  allmultimediaVideoData = [];
  vedioObservable: any;
  multimediaVideoData = [];
  vedioArray = [];
  buttonValue: Boolean = true;
  url: string = environment.currentServerURL + "/api/vedioDelete";
  videoSearch: string = '';
  ngOnInit() {
    $(".button-collapse").sideNav();
    this.getdata();
  }
  getdata() {
    this.vedioObservable = this.http.get(this.multimediaVideoURL).map(res => res.json());
    this.vedioObservable.subscribe((resp) => {
      this.assignVideoData(resp);
    });
  }
  assignVideoData(MData) {
    this.allmultimediaVideoData = MData.data;
    this.multimediaVideoData = MData.data;
  }

  addvedio(val) {
    let index = this.vedioArray.indexOf(parseInt(val.target.id));
    if (index == -1) {
      this.vedioArray.push(parseInt(val.target.id));
    }
    else {
      this.vedioArray.splice(index, 1);
    }

  }

  deleteVedios() {
    if (this.vedioArray.length == 0) {
      this.toast('None Of the Vedio Has Been Selected', 4000)
    }
    else {
      const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
      this.http.post(this.url, { data: this.vedioArray },{ headers: headers })
        .map((res) => res.json())
        .subscribe((response) => {
          this.toast(response.data, 4000)
        });
      this.multimediaVideoData = []
      this.vedioArray = []
      this.getdata();
      this.buttonValue = true;
      this.getdata();
    }
  }

  filtersearch(x) {
    this.multimediaVideoData = this.allmultimediaVideoData.filter(e => {
      var tmpString = e.title.toUpperCase();
      return tmpString.includes(x.target.value.toUpperCase())
    });
  }



  toast(message: string, duration: number){
    Materialize.toast(message,duration);
  }
}
