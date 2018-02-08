import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-driver-image',
  templateUrl: './driver-image.component.html',
  styleUrls: ['./driver-image.component.css']
})
export class DriverImageComponent implements OnInit {

  constructor() { }

  @Input()
  driverURL = '';

  URL: any;
  imageUrl = "assets/images/driver.png";
  ngOnInit() {
    this.URL = this.driverURL.split("/");
    let driverImageURL = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=" + this.URL[this.URL.length - 1] + "&prop=pageimages&format=json&pithumbsize=230";

    Observable.fromPromise(
      fetch(driverImageURL)
        .then((resp) => resp.json())
    )
      .subscribe((e) => {
        for (var key in e.query.pages)
          this.getImage(e.query.pages[key].thumbnail.source);
      })

  }
  getImage(image) {
    this.imageUrl = image;
  }

}
