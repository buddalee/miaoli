import { Component, OnInit, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    const mapProp = {
      center: {lat: 24.6693410, lng: 120.9676240},
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: false,
      scrollWheel: false,
      scaleControl: false,
      draggable: false
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    const marker = new google.maps.Marker({
      position: mapProp.center,
    });
    marker.setMap(this.map);

  }

}
