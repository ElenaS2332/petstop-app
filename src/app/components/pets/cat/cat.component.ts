import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestsService } from './interests.service';

export interface Interests{
  id : string;
  name : string;
}

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {


  constructor(){}

  interests: Interests[] = [
    {id: 'feeding', name: 'Feeding'},
    {id: 'sleeping', name: 'Sleeping'},
    {id: 'entertainment', name: 'Entertainment'},
    {id: 'breeding', name: 'Breeding'},
    {id: 'litter-box', name: 'Litter box'},
    {id: 'hygiene', name: 'Hygiene'},
  ];

}
