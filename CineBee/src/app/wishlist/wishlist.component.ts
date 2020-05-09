import { Component, OnInit } from '@angular/core';
import { FirebaseUsageService } from '../Services/firebase-usage.service';
import { UserService } from '../user.service';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist
  email
  constructor(private firebase:FirebaseUsageService,private user:UserService,private router:Router, private api:APIService) { }

  ngOnInit(): void {
    this.email=this.user.getEmail()
    this.wishlist=this.firebase.OnWishlistFetch(this.email)
  }
  onPoster(tit) {
    this.api.setSearch(tit);
    this.router.navigate(['poster']);
  }

}
