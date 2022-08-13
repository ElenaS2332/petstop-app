import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reptiles',
  templateUrl: './reptiles.component.html',
  styleUrls: ['./reptiles.component.css']
})
export class ReptilesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  playSound(petName: string){
    switch(petName){
      case 'snake':{
        let audio = new Audio();
        audio.src = "../../../assets/snake.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'lizard':{
        let audio = new Audio();
        audio.src = "../../../assets/lizard.wav";
        audio.load();
        audio.play();
        break;
      };
      case 'turtle':{
        let audio = new Audio();
        audio.src = "../../../assets/turtle.mp3";
        audio.load();
        audio.play();
        break;
      };
    }
    
  }

  navigate(petName: string){
    this.router.navigate(['pets/reptiles/' + petName]);
  }

  animals =  [
    {name: 'Snake', description: '', slug: 'snake',
    image: 'assets/reptiles/snake/snake.png'},
    {name: 'Lizard', description: '', slug: 'lizard',
    image: 'assets/reptiles/lizard/lizard.png'},
    {name: 'Turtle', description: '', slug: 'turtle',
    image: 'assets/reptiles/turtle/turtle.png'},
  ];

}
