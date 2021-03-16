import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from './login/basic-authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrainerApp';
  userDisplayName= "";
  
  constructor(public _basicAuthService:BasicAuthenticationService,
              private router:Router){}
      
  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
    this.router.navigate(['/home']);
  }

  
    ngOnInit() {
      this.userDisplayName = sessionStorage.getItem('authenticatedUser');
      
       
    }

  }

  

