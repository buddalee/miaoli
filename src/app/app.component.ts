import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  sideMode = 'over';
  isOpend = false;
  activeNumber: number;
  ngOnInit() {
    if (window.innerWidth >= 1440) {
      this.sideMode = 'side';
      this.isOpend = true;
    }
    const pathname = location.pathname;
    if (pathname.indexOf('stories') > -1) {
      this.activeNumber = 3;
    } else if (pathname.indexOf('home') > -1) {
      this.activeNumber = 1;
    } else if (pathname.indexOf('traffic') > -1) {
      this.activeNumber = 6;
    } else {
      this.activeNumber = 1;
    }
  }
  onResize(event, sideNav) {
    if (event.target.innerWidth < 1440) {
      this.sideMode = 'over';
      this.isOpend = false;
    } else {
      this.sideMode = 'side';
      this.isOpend = true;
    }
  }
  chooseItem(_num, sideNav) {
    this.activeNumber = _num;
    if (window.innerWidth < 1440) {
      sideNav.toggle();
    }
  }

}
