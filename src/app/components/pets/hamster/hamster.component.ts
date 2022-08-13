import { Component, OnInit } from '@angular/core';
 
export interface Interests{
  id : string;
  name : string;
}

@Component({
  selector: 'app-hamster',
  templateUrl: './hamster.component.html',
  styleUrls: ['./hamster.component.css']
})
export class HamsterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  interests: Interests[] = [
    {id: 'feeding', name: 'Feeding', },
    {id: 'cage', name: 'Cage', },
    {id: 'entertainment', name: 'Entertainment', },
    {id: 'hygiene', name: 'Hygiene',},
    {id: 'health', name: 'Health',}
  ];

}
