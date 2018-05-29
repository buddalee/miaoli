import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Page } from '../../shared/page';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit, AfterViewInit {
  textHiddenNum: number;
  config = {
    $bookBlock: $('#bb-bookblock'),
    $navNext: $('#bb-nav-next'),
    $navPrev: $('#bb-nav-prev'),
    $navFirst: $('#bb-nav-first'),
    $navLast: $('#bb-nav-last')
  }
  constructor() { }

  ngOnInit() {
    this.init();
  }
  ngAfterViewInit()	{
    // this.init();
  }
  init() {
    console.log($('#bb-bookblock'));
    $('#bb-bookblock').bookblock( {
      speed : 800,
      shadowSides : 0.8,
      shadowFlip : 0.7
    } );
    this.initEvents();
  }
  initEvents() {
    var $slides = $('#bb-bookblock').children();

    // add navigation events
    $('#bb-nav-next').on( 'click touchstart', () => {
      $('#bb-bookblock').bookblock( 'next' );
      return false;
    } );

    $('#bb-nav-prev').on( 'click touchstart', () => {
      $('#bb-bookblock').bookblock( 'prev' );
      return false;
    } );

    $('#bb-nav-first').on( 'click touchstart', () => {
      $('#bb-bookblock').bookblock( 'first' );
      return false;
    } );

    $('#bb-nav-last').on( 'click touchstart', () => {
      $('#bb-bookblock').bookblock( 'last' );
      return false;
    } );
    
    // add swipe events
    $slides.on( {
      'swipeleft' : ( event ) => {
        $('#bb-bookblock').bookblock( 'next' );
        return false;
      },
      'swiperight' : ( event ) => {
        $('#bb-bookblock').bookblock( 'prev' );
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
          $('#bb-bookblock').bookblock( 'prev' );
          break;
        case arrow.right:
          $('#bb-bookblock').bookblock( 'next' );
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
