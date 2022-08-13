import { Component, OnInit } from '@angular/core';

export interface Interests{
  id : string;
  name : string;
}
 
@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'choose-the-right-snake', name: 'Choose the right snake', },
    {id: 'feeding', name: 'Feeding', },
    {id: 'cage', name: 'Cage', },
    {id: 'entertainment', name: 'Entertainment', },
    {id: 'health', name: 'Health', },
    {id: 'hygiene', name: 'Hygiene', },

  ];

}
