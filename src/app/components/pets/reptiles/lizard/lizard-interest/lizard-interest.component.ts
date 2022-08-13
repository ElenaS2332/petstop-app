import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LizardInterestService } from '../lizard-interest.service';

@Component({
  selector: 'app-lizard-interest',
  templateUrl: './lizard-interest.component.html',
  styleUrls: ['./lizard-interest.component.css']
})
export class LizardInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: LizardInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;

}
