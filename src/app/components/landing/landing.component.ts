import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  logout(){
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
    
  }

}
