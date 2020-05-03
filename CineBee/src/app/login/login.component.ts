import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { FirebaseUsageService } from '../Services/firebase-usage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  showErrorMessage = false;
  temp;
  email;
  constructor(private router:Router, private user:UserService, private userDetails:FirebaseUsageService) { }
  ngOnInit() {
  }
  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    this.email=e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this.temp=this.userDetails.fun(username,password);
    if(this.temp) {
      this.user.setUserLoggedIn();
      this.router.navigate(['homepage']);
      this.user.setEmail(this.email);
    }
    else{
        this.showErrorMessage = true;
    }
  }
}