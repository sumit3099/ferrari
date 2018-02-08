import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../../../environments/environment';
import { Headers } from '@angular/http';
@Component({
  selector: 'app-upload-vedio',
  templateUrl: './upload-vedio.component.html',
  styleUrls: ['./upload-vedio.component.css']
})
export class UploadVedioComponent implements OnInit {
  vedioForm: FormGroup;
  url: string = environment.currentServerURL + "/api/vedioUpload";
  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
  }
  createForm() {
    this.vedioForm = this.fb.group({
      title: ['', Validators.required],
      vedioDescription: ['', Validators.required],
      vedioLink: ['', [Validators.required, Validators.pattern('^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$')]],
      level: ['1'],
      category: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{2,30}$')]]
    });
  }
  vedioUpload() {
    if (this.vedioForm.valid) {
         const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
      this.http.post(this.url, { data: this.vedioForm.value },{ headers: headers })
        .map((res) => res.json())
        .subscribe((response) => {
          this.toast(response.data, 4000, "green")
          this.vedioForm.reset();

        });
    } else {
      this.toast('form details invalid', 4000, "red")
    }
  }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }
  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}

