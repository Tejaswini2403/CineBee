import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-not-found',
  templateUrl: './movie-not-found.component.html',
  styleUrls: ['./movie-not-found.component.css']
})
export class MovieNotFoundComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit(): void {
  }

  func()
  {
    if(this.user.getUserLoggedIn())
      this.router.navigate(['homepage']);
    else
      this.router.navigate(['firstpage']);
  }

}
