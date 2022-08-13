import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnakeInterestService } from '../snake-interest.service';

@Component({
  selector: 'app-snake-interest',
  templateUrl: './snake-interest.component.html',
  styleUrls: ['./snake-interest.component.css']
})
export class SnakeInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: SnakeInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;

}
