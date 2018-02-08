import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-driver-stats',
  templateUrl: './driver-stats.component.html',
  styleUrls: ['./driver-stats.component.css']
})
export class DriverStatsComponent implements OnInit {
  url: string = environment.currentServerURL + "/api/drivers";
  alldrivers = [];
  drivers = [];
  driver: any;
  p: number = 1;
  driverSearch: string = '';
  constructor(private http: Http) { }
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");

    this.driver = this.http.get(this.url).map(res => res.json());
    this.driver.subscribe((e) => {
      this.setdata(e.data);
    })
  }
  setdata(e) {
    this.alldrivers = e;
    this.drivers = this.alldrivers;
  }
  filtersearch(x) {
    this.drivers = this.alldrivers.filter(e => {
      var tmpString = e.givenName.toUpperCase() + " " + e.familyName.toUpperCase();
      return tmpString.includes(this.driverSearch.toUpperCase())
    });
  }

  resetValue() {
    var x = <HTMLInputElement>document.getElementById("driver-search")
    x.value = "";
  }
}
