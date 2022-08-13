import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TurtleInterestService } from '../turtle-interest.service';

@Component({
  selector: 'app-turtle-interest',
  templateUrl: './turtle-interest.component.html',
  styleUrls: ['./turtle-interest.component.css']
})
export class TurtleInterestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: TurtleInterestService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;

}
