import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../../../environments/environment";
import { Http } from "@angular/http";
import { Headers } from '@angular/http';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {


  constructor(private http: Http) { }

  productDetailURL = environment.currentServerURL + "/api/products";
  allproductDetailData = [];
  productObservable: any;
  productDetailData = [];
  productArray = [];
  buttonValue: Boolean = true;
  url: string = environment.currentServerURL + "/api/productDelete";
  productSearch: string = '';
  ngOnInit() {
    $(".button-collapse").sideNav();
    this.getdata();
  }
  getdata() {
    this.productObservable = this.http.get(this.productDetailURL).map(res => res.json());
    this.productObservable.subscribe((resp) => {
      this.assignproductData(resp);
    });
  }
  assignproductData(MData) {
    this.allproductDetailData = MData.data;
    this.productDetailData = MData.data;
  }
  addproduct(val) {
    let index = this.productArray.indexOf(val.target.id);
    if (index == -1) {
      this.productArray.push(val.target.id);
    }
    else {
      this.productArray.splice(index, 1);
    }
  }

  deleteproducts() {
    if (this.productArray.length == 0) {
      this.toast('none of the product has been selected', 4000, "red")
    }
    else {
 const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
      this.http.post(this.url, { data: this.productArray },{ headers: headers })
        .map((res) => res.json())
        .subscribe((response) => {
          this.toast(response.data, 4000, "green")
        });
      this.productDetailData.splice(0, this.productDetailData.length);
      this.productArray.splice(0, this.productArray.length);
      this.getdata();
      this.buttonValue = true;
      this.getdata();
    }
  }
  filtersearch(x) {
    this.productDetailData = this.allproductDetailData.filter(e => {
      var tmpString = e.title.toUpperCase();

      return tmpString.includes(x.target.value.toUpperCase())
    });

  }
  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}
