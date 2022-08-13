import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Interests{
  id : string;
  name : string;
}
 
@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'choose-the-dog', name: 'Choose the dog for you',},
    {id: 'feeding', name: 'Feeding', },
    {id: 'sleeping', name: 'Sleeping', },
    {id: 'entertainment', name: 'Entertainment', },
    {id: 'breeding', name: 'Breeding', },
    {id: 'health', name: 'Health', },
    {id: 'hygiene', name: 'Hygiene', },

  ];
  

}
