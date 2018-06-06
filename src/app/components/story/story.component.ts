import { Component, OnInit } from '@angular/core';
import { Page } from '../../shared/page';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css',]
})
export class StoryComponent implements OnInit {
  textHiddenNum: number;
  config = {
    $bookBlock: $(`#bb-bookblock`),
    $navNext: $(`#bb-nav-next`),
    $navPrev: $(`#bb-nav-prev`),
    $navFirst: $('#bb-nav-first'),
    $navLast: $('#bb-nav-last')
  }
  constructor() { }

  ngOnInit() {
    const arr = [1, 2, 3, 4];
    arr.forEach(_arr => this.init(_arr));
  }
  init(i) {
    $(`#bb-bookblock${i}`).bookblock( {
      speed : 800,
      shadowSides : 0.8,
      shadowFlip : 0.7
    } );
    this.initEvents(i);
  }
  initEvents(i) {
    var $slides = $(`#bb-bookblock${i}`).children();

    // add navigation events
    $(`#bb-nav-next${i}`).on( 'click touchstart', () => {
      $(`#bb-bookblock${i}`).bookblock( 'next' );
      return false;
    } );

    $(`#bb-nav-prev${i}`).on( 'click touchstart', () => {
      $(`#bb-bookblock${i}`).bookblock( 'prev' );
      return false;
    } );

    $('#bb-nav-first').on( 'click touchstart', () => {
      $(`#bb-bookblock${i}`).bookblock( 'first' );
      return false;
    } );

    $('#bb-nav-last').on( 'click touchstart', () => {
      $(`#bb-bookblock${i}`).bookblock( 'last' );
      return false;
    } );
    
    // add swipe events
    $slides.on( {
      'swipeleft' : ( event ) => {
        $(`#bb-bookblock${i}`).bookblock( 'next' );
        return false;
      },
      'swiperight' : ( event ) => {
        $(`#bb-bookblock${i}`).bookblock( 'prev' );
        return false;
      }
    } );

    // add keyboard events
    $( document ).keydown( (e) => {
      var keyCode = e.keyCode || e.which,
        arrow = {
          left : 37,
          up : 38,
          right : 39,
          down : 40
        };

      switch (keyCode) {
        case arrow.left:
          $(`#bb-bookblock${i}`).bookblock( 'prev' );
          break;
        case arrow.right:
          $(`#bb-bookblock${i}`).bookblock( 'next' );
          break;
      }
    } );
  }
  mouseEnter(num: number) {
    this.textHiddenNum = num;
  }

  mouseLeave(num: number) {
    this.textHiddenNum = null;
  }
}
