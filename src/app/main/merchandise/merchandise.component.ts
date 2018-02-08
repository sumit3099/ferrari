import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {

  constructor(private http: Http) { }
  productsData;
  filteredProductsData;
  show = false;

  shirt = "shirt";
  shoes = "shoes";
  cap = "cap";
  jersey = "jersey";

  small = true;
  medium = true;
  large = true;
  xlarge = true;

  priceFilter = 200000;

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
    $('select').material_select();
    $(".button-collapse").sideNav();
    let productsURL = environment.currentServerURL + "/api/products";
    this.http.get(productsURL)
      .map(resp => resp.json())
      .subscribe((resp) => {
        this.assignData(resp);
      })
  }

  assignData(resp) {
    this.productsData = resp.data;
    this.filteredProductsData = this.productsData
    this.show = true;
  }
  /* sorting according to price */
  sortHTL() { // high to low
    this.filteredProductsData.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  sortLTH() { //low to hight
    this.filteredProductsData.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  checkCategory(x) {
    var shirt = <HTMLInputElement>document.getElementById("shirts");
    var shoes = <HTMLInputElement>document.getElementById("shoes");
    var caps = <HTMLInputElement>document.getElementById("caps");
    var jersey = <HTMLInputElement>document.getElementById("jersey");
    if (!shirt.checked && !shoes.checked && !caps.checked && !jersey.checked) {
      this.shirt = "shirt";
      this.shoes = "shoes";
      this.cap = "cap";
      this.jersey = "jersey";
    }
    else {
      if (shirt.checked)
        this.shirt = "shirt";
      else
        this.shirt = "";
      if (shoes.checked)
        this.shoes = "shoes";
      else
        this.shoes = "";
      if (caps.checked)
        this.cap = "cap";
      else
        this.cap = "";
      if (jersey.checked)
        this.jersey = "jersey";
      else
        this.jersey = "";
    }
  }
  checkSize(x) {
    var small = <HTMLInputElement>document.getElementById("s");
    var medium = <HTMLInputElement>document.getElementById("m");
    var large = <HTMLInputElement>document.getElementById("l");
    var xlarge = <HTMLInputElement>document.getElementById("xl");
     if (!small.checked && !medium.checked && !large.checked && !xlarge.checked) {
      this.small = true;
      this.medium = true;
      this.large = true;
      this.xlarge = true;
    }
    else {
      if (small.checked)
        this.small = true;
      else
        this.small = false;
      if (medium.checked)
        this.medium = true;
      else
        this.medium = false;
      if (large.checked)
        this.large = true;
      else
        this.large = false;
      if (xlarge.checked)
        this.xlarge = true;
      else
        this.xlarge = false;
    }
  }
  checkPrice(){
    var price = <HTMLInputElement>document.getElementById("price");
    this.priceFilter = parseInt(price.value);
  }
}
