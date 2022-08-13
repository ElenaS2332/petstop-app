import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestsService } from '../interests.service';


@Component({
  selector: 'app-dog-interest',
  templateUrl: './dog-interest.component.html',
  styleUrls: ['./dog-interest.component.css']
})
export class DogInterestComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private service: InterestsService) { }

  ngOnInit(): void {
    this.interestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.interest = this.service.interests.find(x => x.id == this.interestId);
  }

  interest : any;
  interestId : any;
 

}
