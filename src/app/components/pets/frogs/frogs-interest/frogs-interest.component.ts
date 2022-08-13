import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrogsInterestService } from '../frogs-interest.service';

@Component({
  selector: 'app-frogs-interest',
  templateUrl: './frogs-interest.component.html',
  styleUrls: ['./frogs-interest.component.css']
})
export class FrogsInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: FrogsInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;


}
