import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HamsterInterestService } from '../hamster-interest.service';

@Component({
  selector: 'app-hamster-interest',
  templateUrl: './hamster-interest.component.html',
  styleUrls: ['./hamster-interest.component.css']
})
export class HamsterInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: HamsterInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;

}
