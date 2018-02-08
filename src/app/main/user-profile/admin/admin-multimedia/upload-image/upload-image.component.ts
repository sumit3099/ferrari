import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../../../environments/environment';
import { Headers } from '@angular/http';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  isImage: boolean = false;
  imageForm: FormGroup;
  url: string = environment.currentServerURL + "/api/imageUpload";
  image;
  uploadImage: any;
  show = false;
  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
  }
  createForm() {
    this.imageForm = this.fb.group({
      title: ['', Validators.required],
      imageDescription: ['', Validators.required],
      level: ['1'],
      category: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{2,30}$')]]
    });
  }
  imageUpload(value) {
    if (this.isImage) {
        const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
      this.http.post(this.url, { data: this.imageForm.value, image: this.image() }, { headers: headers })
        .map((res) => res.json())
        .subscribe((response) => {
          this.toast(response.data, 4000, "green")
          this.imageForm.reset();
        });
    } else {
      this.toast('form details invalid', 4000, "red")
    }
  }
  ngOnInit() {
    $(".button-collapse").sideNav();
  }
  checkImage(val) {
    var reader = new FileReader();
    reader.readAsDataURL(val.target.files[0]);
    let TheFileContents;
    this.image = reader.onload = function () {
      return reader.result;
    };
    this.isImage = true;
  }

  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}