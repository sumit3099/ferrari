import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../../../environments/environment';
import { Headers } from '@angular/http';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})


export class AddProductComponent implements OnInit {
  size: [{ small: Boolean, medium: Boolean, large: Boolean, xlarge: Boolean }] = [{ small: false, large: false, medium: false, xlarge: false }];
  isproduct: boolean = false;
  productForm: FormGroup;
  url: string = environment.currentServerURL + "/api/productUpload";
  product;
  uploadproduct: any;
  show = false;
  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
  }
  createForm() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      productDescription: ['', Validators.required],
      category: ['shirt', [Validators.required, Validators.pattern('^[a-zA-Z ]{2,30}$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]{1,10}$')]],
    });
  }
  productUpload(value) {
    if (this.isproduct) {
        const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
      this.http.post(this.url, { data: this.productForm.value, product: this.product(), size: this.size }, { headers: headers })
        .map((res) => res.json())
        .subscribe((response) => {
          this.toast(response.data, 4000, "green")
          this.productForm.reset();
        });
    } else {
      this.toast('form details invalid', 4000, "red")
    }
  }

  changeSizeMerchandise(x) {
    if (x.target.id == 'small') {
      if (this.size[0].small == false) {
        this.size[0].small = true;
      }
      else {
        this.size[0].small = false;
      }
    }

    if (x.target.id == 'medium') {
      if (this.size[0].medium == false) {
        this.size[0].medium = true;
      }
      else {
        this.size[0].medium = false;
      }
    }

    if (x.target.id == 'large') {
      if (this.size[0].large == false) {
        this.size[0].large = true;
      }
      else {
        this.size[0].large = false;
      }
    }
    if (x.target.id == 'xlarge') {
      if (this.size[0].xlarge == false) {
        this.size[0].xlarge = true;
      }
      else {
        this.size[0].xlarge = false;
      }
    }

  }
  ngOnInit() {
    $(".button-collapse").sideNav();
  }
  checkproduct(val) {
    var reader = new FileReader();
    reader.readAsDataURL(val.target.files[0]);
    let TheFileContents;
    this.product = reader.onload = function () {
      return reader.result;
    };
    this.isproduct = true;
  }
  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}