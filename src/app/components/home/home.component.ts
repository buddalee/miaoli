import { Component, OnInit } from '@angular/core';
import { wonderReviews } from './fakeData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reviewDatas = wonderReviews
  isScale = false;
  constructor() { }

  ngOnInit() {
    if (window.innerWidth >= 1440) {
      this.isScale = true;
    }
  }
  onResize(event) {
    if (event.target.innerWidth < 1440) {
      this.isScale = false;
    } else {
      this.isScale = true;
    }
  }
}
