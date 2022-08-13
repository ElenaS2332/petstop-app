import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PigInterestService } from '../pig-interest.service';

@Component({
  selector: 'app-pig-interest',
  templateUrl: './pig-interest.component.html',
  styleUrls: ['./pig-interest.component.css']
})
export class PigInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: PigInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;


}
