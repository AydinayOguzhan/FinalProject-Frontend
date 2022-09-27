import { AuthService } from './../../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-landing-page',
  templateUrl: './nav-landing-page.component.html',
  styleUrls: ['./nav-landing-page.component.css']
})
export class NavLandingPageComponent implements OnInit {
  logged:boolean

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  //TODO: Backend gelince burayı düzelt
  isAuthenticated(logged:boolean){
    var result = this.authService.isAuthenticated(logged);
    if (result) {
      this.logged = true;
    }
    else{
      this.logged = false;
    }
  }

}
