import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-seasons-page',
  templateUrl: './seasons-page.component.html',
  styleUrls: ['./seasons-page.component.css']
})
export class SeasonsPageComponent implements OnInit {

  constructor(private http: Http) { }

  seasonsURL = environment.currentServerURL + "/api/seasons";
  seasonsList:any;

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
    /* fetching seasons list */
    this.http.get(this.seasonsURL)
      .map(resp => resp.json())
      .subscribe((resp) => {
        this.assignValues(resp);
      });
  }

  assignValues(resp){
    this.seasonsList = resp.data;
  }
}
