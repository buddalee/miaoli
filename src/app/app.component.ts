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
  ngOnInit() {
    if (window.innerWidth >= 1440) {
      this.sideMode = 'side';
      this.isOpend = true;
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

}
