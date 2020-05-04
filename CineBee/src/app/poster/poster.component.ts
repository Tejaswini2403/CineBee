import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import { FirebaseUsageService } from '../Services/firebase-usage.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  public info;
  ratings
  reviews
  showRatingsBox=false
  showReviewsBox=false

  constructor(private api:APIService,private router:Router,private firebase:FirebaseUsageService,private user:UserService) { }

  ngOnInit(): void {
    //alert("entered in poster")
    this.funCall()
    this.ratings=this.firebase.ratings
    this.reviews=this.firebase.reviews
  }

  funCall() {
    this.api.apiCall(this.api.getSearch()).subscribe((data)=>{
      //alert("In poster  " +this.api.getSearch())
      this.info=data
      //alert("got data  "+this.info.Title)
      if(this.info.Title==undefined){
        this.router.navigate(['movieNotFound'])
      }
    })
  }
  ratingsSubmit(e) {
    e.preventDefault();
    var rate = e.target.elements[0].value;
    //alert("in ratingsSubmit "+rate)
    this.onAddRating(this.info.Title,rate)
    this.onSaveRating()
    this.resetRatingBox()
  }
  reviewsSubmit(e) {
    e.preventDefault();
    var rev = e.target.elements[0].value;
    //alert("in reviewsSubmit "+rev)
    this.onAddReview(this.info.Title,rev)
    this.onSaveReview()
    this.resetReviewBox()
  }
  onAddRating(title,rating) {
    //alert("in onadd ratings "+title+"  "+rating)
    this.ratings.push({
      title:title,
      rating:rating
    })
  }
  onAddReview(title,review) {
    //alert("in onadd reviews "+title+"  "+review)
    this.reviews.push({
      title:title,
      review:review
    })
  }
  onSaveRating() {
    //alert("in on save ratings "+this.ratings),
    this.firebase.saveRating(this.ratings).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error),
    )
  }
  onSaveReview() {
    //alert("in on save reviews "+this.reviews),
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

  }
  resetRatingBox() {
    this.showRatingsBox=false;
  }
  resetReviewBox() {
    this.showReviewsBox=false;
  }

}
