import { Component, OnInit } from '@angular/core';

export interface Interests{
  id : string;
  name : string;
}


@Component({
  selector: 'app-lizard',
  templateUrl: './lizard.component.html',
  styleUrls: ['./lizard.component.css']
})
export class LizardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'choose-your-lizard', name: 'Choose your lizard', },
    {id: 'feeding', name: 'Feeding', },
    {id: 'hygiene', name: 'Hygiene', },
    {id: 'cage', name: 'Cage',},
    {id: 'entertainment', name: 'Entertainment',},
    {id: 'breeding', name: 'Breeding',},
  ];


}
