import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestsService } from '../interests.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: InterestsService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;

}
