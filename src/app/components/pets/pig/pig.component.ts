import { Component, OnInit } from '@angular/core';

export interface Interests{
  id : string;
  name : string;
}

@Component({
  selector: 'app-pig',
  templateUrl: './pig.component.html',
  styleUrls: ['./pig.component.css']
})
export class PigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'feeding', name: 'Feeding', },
    {id: 'sleeping', name: 'Sleeping', },
    {id: 'entertainment', name: 'Entertainment', },
    {id: 'breeding', name: 'Breeding', },
    {id: 'litter-box', name: 'Litter box', },
    {id: 'hygiene', name: 'Hygiene', },

  ];


}
