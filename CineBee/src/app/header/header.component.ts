import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { APIService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private router:Router, private user:UserService, private api:APIService){}
  
  ngOnInit(): void {
  }

  func()
  {
    if(this.user.getUserLoggedIn())
      this.router.navigate(['homepage']);
    else
      this.router.navigate(['firstpage']);
  }
  onLogout() {
    this.user.reSetUserLoggedIn();
    //this.router.navigate(['firstpage']);
  }
  onSearch(ele) {
    this.api.setSearch(ele.target.elements[0].value);
    //alert("in header.ts  "+ele.target.elements[0].value);
    this.router.navigate(['poster']);
    //alert("Here");
  }
  onProfileClick() {
    this.router.navigate(['profile']);
  }
}