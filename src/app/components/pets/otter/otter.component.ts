import { Component, OnInit } from '@angular/core';

export interface Interests{
  id : string;
  name : string;
}


@Component({
  selector: 'app-otter',
  templateUrl: './otter.component.html',
  styleUrls: ['./otter.component.css']
})
export class OtterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'feeding', name: 'Feeding',},
    {id: 'sleeping', name: 'Sleeping', },
    {id: 'entertainment', name: 'Entertainment', },
    {id: 'breeding', name: 'Breeding', },
    {id: 'cage', name: 'Cage', },
    {id: 'hygiene', name: 'Hygiene', },
  ];

}
