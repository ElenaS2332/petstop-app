import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RabbitInterestService } from '../rabbit-interest.service';

@Component({
  selector: 'app-rabbit-interest',
  templateUrl: './rabbit-interest.component.html',
  styleUrls: ['./rabbit-interest.component.css']
})
export class RabbitInterestComponent implements OnInit {

  
  constructor(private activatedRoute: ActivatedRoute, private service: RabbitInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;
}
