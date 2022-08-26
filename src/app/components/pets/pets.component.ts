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

  
  navigate(petName: string){
    this.router.navigate(['pets/' + petName]);
  }
  
  currentPlayedElem: HTMLAudioElement;

  play(soundPlayed : HTMLAudioElement){
    
    if(this.currentPlayedElem && this.currentPlayedElem !== soundPlayed){
      this.currentPlayedElem.pause();
    }

    this.currentPlayedElem = soundPlayed;
  }

  animals =  [
    {name: 'Cat', description: '', slug: 'cat',
    image: 'assets/cat/cat.png',
    sound: 'assets/cat_y.wav'},
    {name: 'Dogs', description: '', slug: 'dog',
    image: 'assets/dog/dog.png',
    sound: 'assets/dog_bark2.wav'},
    {name: 'Hamster', description: '', slug: 'hamster',
    image: 'assets/hamster/hamster.png',
    sound: 'assets/mouse.mp3'},
    {name: 'Guinea Pig', description: '', slug: 'guinea-pig',
    image: 'assets/guinea-pig/guinea-pig.png',
    sound: 'assets/guinea-pig.wav'},
    {name: 'Rabbit', description: '', slug: 'rabbit',
    image: 'assets/rabbit/rabbit.png',
    sound: 'assets/rabbit.wav'},
    {name: 'Pig', description: '', slug: 'pig',
    image: 'assets/pig/pig.png',
    sound: 'assets/pig4.wav'},
    {name: 'Horse', description: '', slug: 'horse',
    image: 'assets/horse/horse.png',
    sound: 'assets/horse.wav'},
    {name: 'Otter', description: '', slug: 'otter',
    image: 'assets/otter/otter.png',
    sound: 'assets/otter.mp3'},
    {name: 'Fish', description: '', slug: 'fish',
    image: 'assets/fish/fish.png',
    sound: 'assets/fish.wav'},
    {name: 'Frog', description: '', slug: 'frogs',
    image: 'assets/frog/frog.png',
    sound: 'assets/frog.wav'},
    {name: 'Reptiles', description: '', slug: 'reptiles',
    image: 'assets/reptiles/reptiles.png',
    sound: 'assets/reptiles.wav'},
    {name: 'Birds', description: '', slug: 'birds',
    image: 'assets/birds/birds.png',
    sound: 'assets/bird.wav'},
  ];

  
}
