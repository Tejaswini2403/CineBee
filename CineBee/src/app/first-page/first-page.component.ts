import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private router:Router,private api:APIService, private user:UserService) { }

  ngOnInit(): void {
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
