import { Component, OnInit } from '@angular/core';
import { wonderReviews, pttReviews } from './fakeData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reviewDatas = wonderReviews
  isScale = false;
  pttDatas = pttReviews;
  pttIdx = 0;
  reviewIdx = 0;
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
  prePtt() {
    if (this.pttIdx - 1 > -1) {
      this.pttIdx--;
    } else {
      this.pttIdx = this.pttDatas.length - 1;
    }
  }
  nextPtt() {
    if (this.pttIdx + 1 !== this.pttDatas.length) {
      this.pttIdx++;
    } else {
      this.pttIdx = 0;
    }
  }
  preReview() {
    if (this.reviewIdx - 1 > -1) {
      this.reviewIdx--;
    } else {
      this.reviewIdx = this.reviewDatas.length - 1;
    }
  }
  nextReview() {
    if (this.reviewIdx + 1 !== this.reviewDatas.length) {
      this.reviewIdx++;
    } else {
      this.reviewIdx = 0;
    }
  }
}
