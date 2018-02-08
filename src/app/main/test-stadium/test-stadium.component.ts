import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import '../../../../node_modules/image-map-resizer/js/imageMapResizer.min.js';
import './jquery.maphilight.min.js';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { UserDetailService } from "../../services/user-detail.service";
import { ActivatedRoute } from '@angular/router';
import { Headers } from '@angular/http';
@Component({
  selector: 'app-test-stadium',
  templateUrl: './test-stadium.component.html',
  styleUrls: ['./test-stadium.component.css']
})
export class TestStadiumComponent implements OnInit {

  constructor(private http: Http, private userDetailService: UserDetailService, private route: ActivatedRoute) { }
  StadiumCollaboratorUri: string = environment.currentServerURL + '/api/stadiumCollaborator';
  data = [];
  gotData: boolean = false;
  modifySeatURL = environment.currentServerURL + "/api/modifySeat";

  fanName = "";
  fanSeatNo = "";
  fanEmail = "";
  fanProfile = "";
  changeToSeat: any;
  event: any;

  currentUser: any;
  eventId = "";
  stadiumName = "";
  ngOnInit() {
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('map').imageMapResize();
    $('.map-1').maphilight()

    /* getting event id from PARAM */
    this.route.params.subscribe((params) => {
      this.getStadiumCollaboratorDetails(params.eventId);
      this.eventId = params.eventId;
      this.stadiumName = params.stadiumName;
    });

    this.assignSeatId();
  }

  getStadiumCollaboratorDetails(id) {
     const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
    this.http.post(this.StadiumCollaboratorUri, { eventId: id }, { headers: headers })
      .map((res) => res.json())
      .subscribe((resp) => {
        if (resp.data) {
          this.data = resp.data.filter(item => {
            if (item.email != this.userDetailService.email) {
              return item;
            }
            else {
              this.currentUser = item;
            }
          });
          this.gotData = true;
        }
        this.fansOnSeat();
      });
  }


  /* placing fans on seat */
  fansOnSeat() {
    for (let i = 0; i < this.data.length; i++) {
      let tempId = "#" + this.data[i].seatNo;
      $(tempId).data('maphilight', { 'alwaysOn': true, fillColor: '‎009999', fillOpacity: 1 }).trigger('alwaysOn.maphilight');
      $(tempId).prop('title', this.data[i].seatNo + ' : Reserved : ' + this.data[i].name);
      $(tempId).prop('alt', 'reserved');
    }

    /* for current User */
    let currentUserId = "#" + this.currentUser.seatNo;
    $(currentUserId).prop('alt', 'Your Seat');
    $(currentUserId).prop('title', this.currentUser.seatNo + ' : Reserved : Your Seat');
    $(currentUserId).data('maphilight', { 'alwaysOn': true, fillColor: '009900', fillOpacity: 1 }).trigger('alwaysOn.maphilight');
  }


  /*assigning id an title to the area*/
  assignSeatId() {
    var x = document.getElementsByTagName('area');
    for (let i = 0; i < x.length; i++) {
      x[i].id = (i + 1) + "";
      x[i].title = (i + 1) + " : VACANT";
      x[i].alt = "vacant";
    }
  }


  /*test seat click*/
  seatClicked(event) {
    let tempId = "#" + event.target.id;
    event.preventDefault();

    if (event.target.alt == "vacant") {
      this.event = event;
      $('#modal-seat-change').modal('open');
    }

    else if (event.target.alt == "reserved") {
      let seat = this.data.filter(res => res.seatNo == event.target.id)[0];
      this.fanName = seat.name;
      this.fanSeatNo = seat.seatNo;
      this.fanEmail = seat.email;
      this.fanProfile = seat.profilePicUrl;
      $('#modal-fan-view').modal('open');
    }
  }

  changeSeat() {
      const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
    let event = this.event;
    let tempId = "#" + event.target.id;
    /*modifying seat no. in database*/
    this.http.post(this.modifySeatURL, {
      email: this.currentUser.email,
      seatNo: event.target.id,
      eventId: this.eventId
    }, { headers: headers })
      .map((res) => res.json())
      .subscribe((response) => {
        if (response.result) {
          $(tempId).prop('alt', 'Your Seat');
          $(tempId).prop('title', this.currentUser.seatNo + ' : Reserved : Your Seat');
          $(tempId).data('maphilight', { 'alwaysOn': true, fillColor: '009900', fillOpacity: 1 }).trigger('alwaysOn.maphilight');

          /* modify previous seat as VACANT */
          let currentUserId = "#" + this.currentUser.seatNo;
          $(currentUserId).prop('alt', 'vacant');
          $(currentUserId).prop('title', this.currentUser.seatNo + ' : VACANT');
          $(currentUserId).data('maphilight', { 'alwaysOn': false }).trigger('alwaysOn.maphilight');

          /* updating current user seat no. */
          this.currentUser.seatNo = event.target.id;

          /*calling toast on successful change*/
          this.toast("Your Booking Details Have Been Modified!", 4000, "green");
          this.toast("Your Current Seat No Is : " + this.currentUser.seatNo, 4000, "green");
        }
        else {
          this.toast("ERROR : Seat Modification Failed!", 4000, "red");
        }
      });
    $('#modal-seat-change').modal('close');
  }
  closeModal() {
    $('#modal-seat-change').modal('close');
  }

  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }


}