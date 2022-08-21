import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';



@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})

export class VetComponent implements OnInit, AfterViewInit {

  constructor(){}

  ngOnInit(): void {

    this.location = navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  ngAfterViewInit(){
    const bounds = this.getBounds(this.markers);
    this.map.googleMap?.fitBounds(bounds);
 }

 marker1 = { position: { lat: 41.74833365966625, lng: 22.19801556608806 },
 title : 'Veterinarna stanica Stip', options: { animation: google.maps.Animation.BOUNCE }, };
 marker2 = { position: { lat: 41.75459039198274, lng: 22.198556636225362},
 title : 'Алфа Вет', options: { animation: google.maps.Animation.BOUNCE }, };
 marker3 = { position: { lat: 41.89217885205864, lng: 21.94166552892023 },
 title : 'Ветеринарна Станица Свети Николе', options: { animation: google.maps.Animation.BOUNCE }, };
 marker4 = {position: { lat: 41.89733945400782, lng: 22.499181471101018 },
 title : 'Ветеринарна Станица Виница', options: { animation: google.maps.Animation.BOUNCE }, };
 marker5 = {position: { lat: 42.142676627905004, lng: 21.718004812462112 },
 title : 'Ветеринарен Сточарски Центар', options: { animation: google.maps.Animation.BOUNCE },}; 
 marker6 = {position: { lat: 42.01780392892308, lng: 21.468159734319688},
 title : 'Хепи пет', options: { animation: google.maps.Animation.BOUNCE },};
 marker7 = {position: { lat: 41.99381274554567, lng: 21.417419899795274 },
 title : 'Пет-вет', options: { animation: google.maps.Animation.BOUNCE },  };
 marker8 = {position: { lat: 41.992312397522305, lng: 21.41671602196549 },
 title : 'Ветеринарен центар', options: { animation: google.maps.Animation.BOUNCE }, };
 marker9 = {position: { lat: 41.36912202806242, lng: 21.543019395946803 },
 title : 'Veterinary Clinic', options: { animation: google.maps.Animation.BOUNCE }, };
 marker10 = {position: { lat: 41.05734974161454, lng: 21.3362686304466 },
 title : 'Mano Pet Vet', options: { animation: google.maps.Animation.BOUNCE }, };
 marker11 = {position: { lat: 41.998115993551025, lng: 21.419801096198313 },
 title : 'Вет свет', options: { animation: google.maps.Animation.BOUNCE }, };
 marker12 = {position: { lat: 41.943836383540074, lng: 21.513585017567813 },
 title : 'Вет Тим', options: { animation: google.maps.Animation.BOUNCE }, };
 marker13 = {position: { lat: 41.95971362295282, lng: 21.428189966948157 },
 title : 'Ремедиум вет', options: { animation: google.maps.Animation.BOUNCE }, };
 marker14 = {position: { lat: 42.00186649009074, lng: 21.39401857957555 },
 title : 'Анимал медика', options: { animation: google.maps.Animation.BOUNCE }, };
 marker15 = {position: { lat: 42.0043123470026, lng: 21.39050776880139 },
 title : 'Vetmedik - veterinarna ambulanta', options: { animation: google.maps.Animation.BOUNCE },  };
 marker16 = {position: { lat: 42.15931502045466, lng: 21.74663448255699 },
 title : 'Ветеринарна клиника Ино-ВЕТ', options: { animation: google.maps.Animation.BOUNCE },};

 
 markers = [this.marker1, this.marker2, this.marker3, this.marker4,
   this.marker5, this.marker6, this.marker7, this.marker8, this.marker9,
   this.marker10, this.marker11, this.marker12, this.marker13, this.marker14, this.marker15, this.marker16
 ];
 
 mapOptions: google.maps.MapOptions = {
   center: { lat: 41.608635, lng: 21.745275 },
   zoom: 8,
   streetViewControl: false,
   heading: 6,
 };

 mapStyle: google.maps.MapTypeStyle = {
  stylers: [
    { "color": "red" }
  ],
  featureType : "road",
 }

@ViewChild(GoogleMap, {static: false}) map: GoogleMap;
@ViewChild(MapInfoWindow, {static:false}) infoWindow : MapInfoWindow;

 location : any;
 center: google.maps.LatLngLiteral
 
 openInfo(marker: any){
  this.infoWindow.open(marker);
 }

 getBounds(markers : any){
  let north;
  let south;
  let east;
  let west;

  for (const marker of markers){
    // set the coordinates to marker's lat and lng on the first run.
    // if the coordinates exist, get max or min depends on the coordinates.
    north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
    south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
    east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
    west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
  };

  const bounds = { north, south, east, west };

  return bounds;
}

 
}