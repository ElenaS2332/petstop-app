import { Component, OnInit } from '@angular/core';


export interface Interests{
  id : string;
  name : string;
}

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.css']
})
export class RabbitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: Interests[] = [
    {id: 'feeding', name: 'Feeding',},
    {id: 'sleeping', name: 'Sleeping',},
    {id: 'entertainment', name: 'Entertainment', },
    {id: 'liter-box', name: 'Liter box', },
    {id: 'hygiene', name: 'Hygiene', },
    {id: 'breeding', name: 'Breeding', },
  ];

}
