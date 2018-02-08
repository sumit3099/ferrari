import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
@Component({
  selector: 'app-delete-images',
  templateUrl: './delete-images.component.html',
  styleUrls: ['./delete-images.component.css']
})
export class DeleteImagesComponent implements OnInit {
  constructor(private http: Http) { }
  multimediaImagesURL = environment.currentServerURL + "/api/multimedia-images";
  allmultimediaImagesData = [];
  imagesObservable: any;
  multimediaImagesData = [];
  imagesArray = [];
  buttonValue: Boolean = true;
  url: string = environment.currentServerURL + "/api/imagesDelete";
  imagesSearch: string = '';
  ngOnInit() {
    $(".button-collapse").sideNav();
    this.getdata();
  }
  getdata() {
    this.imagesObservable = this.http.get(this.multimediaImagesURL).map(res => res.json());
    this.imagesObservable.subscribe((resp) => {
      this.assignVideoData(resp);
    });
  }
  assignVideoData(MData) {
    this.allmultimediaImagesData = MData.data;
    this.multimediaImagesData = MData.data;
  }
  addimages(val) {
    let index = this.imagesArray.indexOf(parseInt(val.target.id));
    if (index == -1) {
      this.imagesArray.push(parseInt(val.target.id));
    }
    else {
      this.imagesArray.splice(index, 1);
    }
  }
  removeElement(itemArray) {
    for (let i = 0; i < itemArray.length; i++) {
      for (let j = 0; j < this.multimediaImagesData.length; j++) {
        if (this.multimediaImagesData[j].multimediaId == itemArray[i]) {
          this.multimediaImagesData.splice(j, 1);
        }
      }
    }
  }
  deleteImages() {
    if (this.imagesArray.length == 0) {
      this.toast('Please select item(s) to delete first', 4000)
    }
    else {
      //this.removeElement(this.imagesArray);
      const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
      this.http.post(this.url, { data: this.imagesArray },{ headers: headers })
        .map((res) => res.json())
        .subscribe((response) => {
          this.toast(response.data, 4000)
        });
      this.allmultimediaImagesData = [];
      this.multimediaImagesData = [];
      this.getdata();
      this.buttonValue = true;
      this.getdata();
    }
  }
  filtersearch(x) {
    this.multimediaImagesData = this.allmultimediaImagesData.filter(e => {
      var tmpString = e.title.toUpperCase();
      return tmpString.includes(x.target.value.toUpperCase())
    });


  }
  toast(message: string, duration: number = 3000) {
    Materialize.toast(message, duration);
  }
}