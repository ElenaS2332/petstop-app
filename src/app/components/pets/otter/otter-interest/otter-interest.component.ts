import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OtterInterestService } from '../otter-interest.service';

@Component({
  selector: 'app-otter-interest',
  templateUrl: './otter-interest.component.html',
  styleUrls: ['./otter-interest.component.css']
})
export class OtterInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: OtterInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;

}
