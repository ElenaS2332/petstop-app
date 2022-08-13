import { Component, OnInit } from '@angular/core';

export interface Interests{
  id : string;
  name : string;
}

@Component({
  selector: 'app-turtle',
  templateUrl: './turtle.component.html',
  styleUrls: ['./turtle.component.css']
})
export class TurtleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'choose-the-right-turtle', name: 'Choose the right turtle',},
    {id: 'feeding', name: 'Feeding', },
    {id: 'accommodation ', name: 'Accommodation ', },
    {id: 'entertainment', name: 'Entertainment',},
    {id: 'hygiene', name: 'Hygiene',},
    {id: 'health', name: 'Health',},
    {id: 'breeding', name: 'Breeding',},

  ];

}
