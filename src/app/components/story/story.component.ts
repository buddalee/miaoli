import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  textHiddenNum: number;
  constructor() { }

  ngOnInit() {
  }
  mouseEnter(num: number) {
    this.textHiddenNum = num;
  }

  mouseLeave(num: number) {
    this.textHiddenNum = null;
  }
}
