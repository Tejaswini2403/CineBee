import { Component, OnInit } from '@angular/core';
import { PosterComponent } from '../poster/poster.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist

  constructor(private data:PosterComponent) { }

  ngOnInit(): void {
    this.wishlist=this.data.wishlist
  }

}
