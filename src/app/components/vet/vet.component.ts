import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { map } from 'rxjs';



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
  
  infoObject = <any>[];
  markersOnMap = [
    {
      LatLng: [{
        lat : 41.74287462108408, lng : 22.197896413376025
      }],
      locationName : 'Veterinarna stanica Stip',
    },
    {
      LatLng: [{
        lat: 41.751113606323734, lng: 22.197875679090927
      }],
      locationName : 'Алфа Вет'
    },
    {
      LatLng: [{
        lat: 41.87009513690993, lng: 21.941157120962064
      }],
      locationName : 'Ветеринарна Станица Свети Николе'
    },
    {
      LatLng: [{
        lat: 41.88086470874704, lng: 22.503197063305027
      }],
      locationName : 'Ветеринарна Станица Виница'
    },
    {
      LatLng: [{
        lat: 42.1408299928249, lng: 21.718038258643134
      }],
      locationName : 'Ветеринарен Сточарски Центар'
    },
    {
      LatLng: [{
        lat: 41.98298087180997, lng: 21.473980592523805
      }],
      locationName : 'Хепи пет'
    },
    {
      LatLng: [{
        lat: 41.989504833497264, lng: 21.417502345272535
      }],
      locationName : 'Пет-вет'
    },
    {
      LatLng: [{
        lat: 41.99162563379517, lng: 21.41660231128173
      }],
      locationName : 'Ветеринарен центар'
    },
    {
      LatLng: [{
        lat: 41.346725220545565, lng: 21.54290201347306
      }],
      locationName : 'Veterinary Clinic'
    },
    {
      LatLng: [{
        lat: 41.02626248154147, lng: 21.331244837966352
      }],
      locationName : 'Mano Pet Vet'
    },
    {
      LatLng: [{
        lat: 41.99663464185951, lng : 21.419691876673042
      }],
      locationName : 'Вет свет'
    },
    {
      LatLng: [{
        lat:41.937259863413864, lng: 21.5141268174911 
      }],
      locationName : 'Вет Тим'
    },
    {
      LatLng: [{
        lat: 41.95497349221606, lng:21.428016793713383
      }],
      locationName : 'Ремедиум вет'
    },
    {
      LatLng: [{
        lat: 41.99997220872006, lng: 21.394285881998783 
      }],
      locationName : 'Анимал медика'
    },
    {
      LatLng: [{
        lat: 42.002494719166535, lng: 21.390488965365076
      }],
      locationName : 'Vetmedik - veterinarna ambulanta'
    },
    {
      LatLng: [{
        lat: 42.159252092261084, lng: 21.746641926833917 
      }],
      locationName : 'Ветеринарна клиника Ино-ВЕТ'
    },
    {
      LatLng: [{
        lat: 41.71322533354946, lng: 21.774323347886654 
      }],
      locationName : 'Veterinarna Ambulanta Tashkovski - Veterinar Veles'
    },
    {
      LatLng: [{
        lat: 41.11796115609996, lng: 20.800993183610743 
      }],
      locationName : 'Ветеринарна Амбуланта „Вет-Медика'
    },
    {
      LatLng: [{
        lat: 42.008575899915584, lng: 21.385230674361015
      }],
      locationName : 'Veterinarna ambulanta - Milenici'
    },
    {
      LatLng: [{
        lat: 42.00824979399589, lng: 21.366392227821468
      }],
      locationName : 'Veterinarna ambulanta „Naletoski“'
    },
    {
      LatLng: [{
        lat: 41.990526093089905, lng:21.414413640670684 
      }],
      locationName : 'Moglivet'
    },
    {
      LatLng: [{
        lat: 42.0030669881394, lng: 21.400549619754095
      }],
      locationName : 'Vet In'
    },
    {
      LatLng: [{
        lat: 41.03423915096611, lng: 21.33991265122678
      }],
      locationName : 'Д-р Стојаноски'
    },
    {
      LatLng: [{
        lat: 41.030564556083206, lng: 21.3462184971767
      }],
      locationName : 'Ветеринарна амбуланта „Д-р Чупова“'
    },
    {
      LatLng: [{
        lat: 41.11962106645463, lng: 20.802247005665574
      }],
      locationName : 'Ветеринарна амбуланта „Д-р Тони'
    },
    {
      LatLng: [{
        lat: 41.11027806275819, lng: 20.806839453428854
      }],
      locationName : 'Vet Spirit'
    },
    {
      LatLng: [{
        lat: 41.91377838986356, lng: 22.421809773996305
      }],
      locationName : 'Vet-Med Veterinary Ambulance'
    },
    {
      LatLng: [{
        lat: 41.35015710770062, lng: 21.556762113649953
      }],
      locationName : 'Veterinary center VITO VET'
    },
    {
      LatLng: [{
        lat: 41.344573964817585, lng: 21.558499716213614
      }],
      locationName : 'Ветеринарна амбуланта „ПЕТ ЛЕНД“ Прилеп'
    },
    {
      LatLng: [{
        lat: 41.33169294752464, lng: 21.537259208470875
      }],
      locationName : 'Дамески Ветерина'
    },
    {
      LatLng: [{
        lat: 41.50786159686895, lng: 20.954597148612464
      }],
      locationName : 'Zebra Veterinarna Ambulanta'
    },
    {
      LatLng: [{
        lat: 41.43621344793536, lng: 22.64676939158881
      }],
      locationName : 'Kosmovet'
    },
    {
      LatLng: [{
        lat: 41.432778063122264, lng: 22.641019071280628
      }],
      locationName : 'ДВУ Ветеринарна амбуланта АЛФА ВЕТЕРИНА'
    },
    {
      LatLng: [{
        lat: 41.430843078144925, lng: 22.648107692017405
      }],
      locationName : 'ВЕТРОМЕД дооел'
    },
  ]

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

      for(var i=0; i<this.markersOnMap.length; i++){

        var contentString = '<h3>' + this.markersOnMap[i].locationName + '</h3>';

        const marker = new google.maps.Marker({
          position : this.markersOnMap[i].LatLng[0],
          map: this.map,
        })

        const infoWindow = new google.maps.InfoWindow({
          content: contentString,
        })

        marker.addListener("click", () => {
          this.closeOtherInfo();
          infoWindow.open(marker.get('map'), marker)
          this.infoObject[0] = infoWindow;
        });
      }
      

    })
  }

  closeOtherInfo(){
    if( this.infoObject.length > 0 ){
      this.infoObject[0].set("marker", null);
      this.infoObject[0].close();
      this.infoObject[0].length = 0;
    }
    
  }
 
}