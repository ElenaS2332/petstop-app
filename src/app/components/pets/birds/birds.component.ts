import { Component, OnInit } from '@angular/core';


export interface Interests{
  id : string;
  name : string;
}


@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  interests: Interests[] = [
    {id: 'choose-the-bird', name: 'Choose the bird for you',},
    {id: 'feeding', name: 'Feeding',},
    {id: 'cage', name: 'Cage'},
    {id: 'entertainment', name: 'Entertainment'},
    {id: 'breeding', name: 'Breeding'},
    {id: 'health', name: 'Health'},
    {id: 'hygiene', name: 'Hygiene'},
  ];
 
}
