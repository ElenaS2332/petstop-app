import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'petStop-app';

  constructor(public authService: AuthenticationService, private router: Router){
  }
  
  ngOnDestroy(): void {
    this.logout();
  }

  logout(){
    this.authService.logout();
  }

}
