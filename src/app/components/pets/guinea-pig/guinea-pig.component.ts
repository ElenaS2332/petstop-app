import { Component, OnInit } from '@angular/core';


export interface Interests{
  id : string;
  name : string;
}


@Component({
  selector: 'app-guinea-pig',
  templateUrl: './guinea-pig.component.html',
  styleUrls: ['./guinea-pig.component.css']
})
export class GuineaPigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'feeding', name: 'Feeding', },
    {id: 'sleeping', name: 'Sleeping', },
    {id: 'entertainment', name: 'Entertainment',},
    {id: 'breeding', name: 'Breeding', },
    {id: 'hygiene', name: 'Hygiene', },

  ];
}
