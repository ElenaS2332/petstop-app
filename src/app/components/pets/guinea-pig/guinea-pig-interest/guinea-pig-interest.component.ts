import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuineaPigInterestService } from '../guinea-pig-interest.service';

@Component({
  selector: 'app-guinea-pig-interest',
  templateUrl: './guinea-pig-interest.component.html',
  styleUrls: ['./guinea-pig-interest.component.css']
})
export class GuineaPigInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: GuineaPigInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;


}
