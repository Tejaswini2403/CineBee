import { Component, OnInit } from '@angular/core';
import { FirebaseUsageService } from '../Services/firebase-usage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist
  email
  constructor(private firebase:FirebaseUsageService,private user:UserService) { }

  ngOnInit(): void {
    this.email=this.user.getEmail()
    this.wishlist=this.firebase.OnWishlistFetch(this.email)
    
  }

}
