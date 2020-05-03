import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private router:Router, private user:UserService){}
  
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
    this.router.navigate(['firstpage']);
  }
}