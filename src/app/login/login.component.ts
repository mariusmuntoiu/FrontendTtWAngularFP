import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

    @Input()
    username:string;
    password:string;
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {

  }

  login() {
    if(this.username=="Marius" && this.password =="apptrainer") {
      this.router.navigate[("/trainer")]
    }
     else{
      alert("Please enter valid details");
    }
  }

}