import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';



@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})

export class VetComponent implements OnInit {
 
  
 center: google.maps.LatLngLiteral
 map : google.maps.Map;
  options : google.maps.MapOptions = {
    mapTypeId : google.maps.MapTypeId.ROADMAP,
    scrollwheel : true,
    disableDefaultUI : true,
    disableDoubleClickZoom : true,
    zoom : 8
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat : position.coords.latitude,
        lng : position.coords.longitude
      }

      this.map = new google.maps.Map(document.getElementById('map-canvas') as HTMLElement, {
        ...this.options,
        center : this.center
      });

      var markerStart = new google.maps.Marker({
        position : this.center,
        map : this.map

      })

    })
  }

 
}