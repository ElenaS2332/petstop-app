import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public authService: AuthenticationService,
    private router: Router,
    private auth : Auth,
    ) { }

  ngOnInit(): void {
  }

  

  logout(){
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
    
  }

}
