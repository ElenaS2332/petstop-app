import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorseInterestService } from '../horse-interest.service';

@Component({
  selector: 'app-horse-interest',
  templateUrl: './horse-interest.component.html',
  styleUrls: ['./horse-interest.component.css']
})
export class HorseInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: HorseInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;

}
