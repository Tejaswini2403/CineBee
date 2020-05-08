import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import { FirebaseUsageService } from '../Services/firebase-usage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  info
  ratings
  reviews
  showRatingsBox=false
  showReviewsBox=false
  show=false
  ratingsInfo=[
    {
      rate:7.8
    }
  ]
  reviewsInfo=[
    {
      rev:"Good"
    }
  ]
  titleInfo:string='Hello'

  constructor(private api:APIService,private router:Router,private firebase:FirebaseUsageService,private user:UserService) { }

  ngOnInit(): void {
    this.funCall()
    this.ratings=this.firebase.ratings
    this.reviews=this.firebase.reviews
  }

  funCall() {
    this.api.apiCall(this.api.getSearch()).subscribe((data)=>{
      this.info=data
      this.titleInfo=this.info.Title
      if(this.info.Title==undefined){
        this.router.navigate(['movieNotFound'])
      }
    })
  }
  onFetchData() {
    this.ratings.forEach(element => {
      if(element.title==this.titleInfo) {
        this.ratingsInfo.push({
          rate:element.rating
        })
      }
    });
    this.reviews.forEach(element => {
      if(element.title==this.titleInfo) {
        this.reviewsInfo.push({
          rev:element.review
        })
      }
    });
    this.show=true
  }
  ratingsSubmit(e) {
    e.preventDefault();
    var rate = e.target.elements[0].value;
    this.onAddRating(this.info.Title,rate)
    this.onSaveRating()
    this.resetRatingBox()
    this.ratingsInfo.push({
      rate:rate
    })
  }
  reviewsSubmit(e) {
    e.preventDefault();
    var rev = e.target.elements[0].value;
    this.onAddReview(this.info.Title,rev)
    this.onSaveReview()
    this.resetReviewBox()
    this.reviewsInfo.push({
      rev:rev
    })
  }
  onAddRating(title,rating) {
    this.ratings.push({
      title:title,
      rating:rating
    })
  }
  onAddReview(title,review) {
    this.reviews.push({
      title:title,
      review:review
    })
  }
  onSaveRating() {
    this.firebase.saveRating(this.ratings).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error),
    )
  }
  onSaveReview() {
    this.firebase.saveReview(this.reviews).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error),
    )
  }
  giveRating() {
    if(this.user.getUserLoggedIn())
      this.showRatingsBox=true
    else
      alert("Please Login to your account to provide rating")
  }
  giveReview() {
    if(this.user.getUserLoggedIn()) 
      this.showReviewsBox=true
    else
      alert("Please Login to your account to provide review")
  }
  addToWishlist() {
    if(this.user.getUserLoggedIn()) {
      var email=this.user.getEmail();
      this.firebase.saveWishlist(email,this.info.Title,this.info.Poster)
      alert("Added to your wishlist")
    }
    else 
      alert("Please Login to your account to provide review")
  }
  resetRatingBox() {
    this.showRatingsBox=false;
  }
  resetReviewBox() {
    this.showReviewsBox=false;
  }

}
