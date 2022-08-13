import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BirdsInterestService } from '../birds-interest.service';

@Component({
  selector: 'app-birds-interest',
  templateUrl: './birds-interest.component.html',
  styleUrls: ['./birds-interest.component.css']
})
export class BirdsInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: BirdsInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;


}
