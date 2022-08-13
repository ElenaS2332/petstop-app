import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

declare const L: any;

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})
export class VetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(!navigator.geolocation){
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
        let map = L.map('map').setView([coords.latitude, coords.longitude], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
}).addTo(map);

    let marker = L.marker([coords.latitude, coords.longitude]).addTo(map);

    });
    this.watchPosition();
  }

  watchPosition(){
    let desLat = 0;
    let deLon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
      if(position.coords.latitude === desLat){
        navigator.geolocation.clearWatch(id);
      }
      },
     (err) =>{
        console.log(err);
      },
      {
        enableHighAccuracy : true,
        timeout : 5000,
        maximumAge : 0,
      })
  }
}
