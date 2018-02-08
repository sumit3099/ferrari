import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../../../environments/environment';
import { Headers } from '@angular/http';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  isnews: boolean = false;
  newsForm: FormGroup;
  url: string = environment.currentServerURL + "/api/newsUpload";
  news;
  uploadnews: any;
  show = false;
  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
  }
  createForm() {
    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      newsDescription: ['', Validators.required],
      author: ['', Validators.required]
    });
  }
  newsUpload(value) {
    if (this.isnews) {
       const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
         this.http.post(this.url, { data: this.newsForm.value, news: this.news() },{ headers: headers })
        .map((res) => res.json())
        .subscribe((response) => {
          Materialize.toast(response.data, 4000);
         this.newsForm.reset();
        });
    } else {
       Materialize.toast('form details Invalid', 4000);
    }
  }
  ngOnInit() {
  }
  checknews(val) {
    var reader = new FileReader();
    reader.readAsDataURL(val.target.files[0]);
    let TheFileContents;
    this.news = reader.onload = function () {
      return reader.result;
    };
    this.isnews = true;
  }
}