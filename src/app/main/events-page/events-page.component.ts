import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  constructor(private http: Http) { }

  eventsURL = environment.currentServerURL + "/api/upcoming-events";
  eventsData: any;
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
    this.http.get(this.eventsURL)
      .map(resp => resp.json())
      .subscribe((resp) => {
       ;
        this.assignEventsData(resp);
      });
  }

  assignEventsData(x) {
    this.eventsData = x.data;
  }
}
