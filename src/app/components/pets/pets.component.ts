import { FormStyle } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BirdsComponent } from './birds/birds.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { FishComponent } from './fish/fish.component';
import { FrogsComponent } from './frogs/frogs.component';
import { GuineaPigComponent } from './guinea-pig/guinea-pig.component';
import { HamsterComponent } from './hamster/hamster.component';
import { OtterComponent } from './otter/otter.component';
import { PigComponent } from './pig/pig.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { ReptilesComponent } from './reptiles/reptiles.component';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {

  private routeSub : any;
  slug: string;

  constructor(private router: Router,){}

  playSound(petName: string){
    switch(petName){
      case 'cat':{
        let audio = new Audio();
        audio.src = "../../assets/cat_y.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'dog':{
        let audio = new Audio();
        audio.src = "../../assets/dog_bark2.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'pig':{
        let audio = new Audio();
        audio.src = "../../assets/pig4.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'hamster':{
        let audio = new Audio();
        audio.src = "../../assets/mouse.mp3";
        audio.load();
        audio.play();
        break;
      };
      case 'guinea-pig':{
        let audio = new Audio();
        audio.src = "../../assets/guinea-pig.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'rabbit':{
        let audio = new Audio();
        audio.src = "../../assets/rabbit.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'otter':{
        let audio = new Audio();
        audio.src = "../../assets/otter.mp3";
        audio.load();
        audio.play();
        break;
      };
      case 'frogs':{
        let audio = new Audio();
        audio.src = "../../assets/frog.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'reptiles':{
        let audio = new Audio();
        audio.src = "../../assets/reptiles.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'horse':{
        let audio = new Audio();
        audio.src = "../../assets/horse.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'fish':{
        let audio = new Audio();
        audio.src = "../../assets/fish.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'birds':{
        let audio = new Audio();
        audio.src = "../../assets/bird.wav";
        audio.load();
        audio.play();
        break;
      }
    }
    
  }
  
  navigate(petName: string){
    this.router.navigate(['pets/' + petName]);
  }
  

  animals =  [
    {name: 'Cat', description: 'Lovely', slug: 'cat',
    image: 'assets/cat/cat.png'},
    {name: 'Dogs', description: 'Friendly', slug: 'dog',
    image: 'assets/dog/dog.png'},
    {name: 'Hamster', description: 'Fluffy', slug: 'hamster',
    image: 'assets/hamster/hamster.png'},
    {name: 'Guinea Pig', description: '', slug: 'guinea-pig',
    image: 'assets/guinea-pig/guinea-pig.png'},
    {name: 'Rabbit', description: '', slug: 'rabbit',
    image: 'assets/rabbit/rabbit.png'},
    {name: 'Pig', description: '', slug: 'pig',
    image: 'assets/pig/pig.png'},
    {name: 'Horse', description: '', slug: 'horse',
    image: 'assets/horse/horse.png'},
    {name: 'Otter', description: '', slug: 'otter',
    image: 'assets/otter/otter.png'},
    {name: 'Fish', description: '', slug: 'fish',
    image: 'assets/fish/fish.png'},
    {name: 'Frog', description: '', slug: 'frogs',
    image: 'assets/frog/frog.png'},
    {name: 'Reptiles', description: '', slug: 'reptiles',
    image: 'assets/reptiles/reptiles.png'},
    {name: 'Birds', description: '', slug: 'birds',
    image: 'assets/birds/birds.png'},
  ];

  
}
