import { Component, OnInit } from '@angular/core';


export interface Interests{
  id : string;
  name : string;
}

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'aquarium', name: 'Aquarium', },
    {id: 'feeding', name: 'Feeding', },
    {id: 'sleeping', name: 'Sleeping', },
    {id: 'entertainment', name: 'Entertainment', },
    {id: 'breeding', name: 'Breeding', },
  ];

}
