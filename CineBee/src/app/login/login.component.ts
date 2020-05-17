import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FirebaseUsageService } from '../Services/firebase-usage.service';
import { APIService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  showErrorMessage = false;
  temp
  email
  images=[
    '../../assets/images/loginImg/img1.jpg',
    '../../assets/images/loginImg/img2.jpg',
    '../../assets/images/loginImg/img3.jpg',
    '../../assets/images/loginImg/img4.jpg',
    '../../assets/images/loginImg/img5.jpg'
  ]

  constructor(private router:Router, private user:UserService,private api:APIService, private userDetails:FirebaseUsageService) { }
  ngOnInit() {
  }
  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    this.email=e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this.temp=this.userDetails.fun(username,password);
    //alert("temp is  "+this.temp)
    //alert("user details are  "+this.userDetails.users)
    //console.log(this.userDetails.users)
    if(this.temp) {
      this.user.setUserLoggedIn();
      this.router.navigate(['homepage']);
      this.user.setEmail(this.email);
    }
    else{
        this.showErrorMessage = true;
    }
  }
  onSearch(ele) {
    this.api.setSearch(ele.target.elements[0].value);
    //alert("in header.ts  "+ele.target.elements[0].value);
    this.router.navigate(['poster']);
    //alert("Here");
  }
  func()
  {
    if(this.user.getUserLoggedIn())
      this.router.navigate(['homepage']);
    else
      this.router.navigate(['firstpage']);
  }

}