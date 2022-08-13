import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishInterestService } from '../fish-interest.service';

@Component({
  selector: 'app-fish-interest',
  templateUrl: './fish-interest.component.html',
  styleUrls: ['./fish-interest.component.css']
})
export class FishInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: FishInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;

}
