import { Component, OnInit } from '@angular/core';


export interface Interests{
  id : string;
  name : string;
 
} 

@Component({
  selector: 'app-frogs',
  templateUrl: './frogs.component.html',
  styleUrls: ['./frogs.component.css']
})
export class FrogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'feeding', name: 'Feeding',},
    {id: 'tank', name: 'Tank', },
    {id: 'entertainment', name: 'Entertainment' },
    {id: 'health', name: 'Health', },
    {id: 'hygiene', name: 'Hygiene', },

  ];

}
