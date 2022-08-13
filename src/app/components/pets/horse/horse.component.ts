import { Component, OnInit } from '@angular/core';

export interface Interests{
  id : string;
  name : string;
}

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'feeding', name: 'Feeding',},
    {id: 'sleeping', name: 'Sleeping', },
    {id: 'entertainment', name: 'Entertainment', },
    {id: 'health', name: 'Health', },
    {id: 'hygiene', name: 'Hygiene', },

  ];

}
