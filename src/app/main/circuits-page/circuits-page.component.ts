import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-circuits-page',
  templateUrl: './circuits-page.component.html',
  styleUrls: ['./circuits-page.component.css']
})
export class CircuitsPageComponent implements OnInit {

  constructor(private http: Http) { }

  currentCircuit: any;
  circuitDetails: any;
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
    $('.materialboxed').materialbox();
    this.currentCircuit = environment.currentServerURL + '/circuit_images/' + 'yas_marina.png';
    let circuitsURL = environment.currentServerURL + "/api/circuits";
    this.http.get(circuitsURL)
      .map(resp => resp.json())
      .subscribe((resp) => {
        this.assignValues(resp);
      });
  }

  assignValues(resp) {
    this.circuitDetails = resp.data;
  }

}
