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
    //alert("entered in poster")
    this.funCall()
    this.ratings=this.firebase.ratings
    this.reviews=this.firebase.reviews
  }

  funCall() {
    //alert("first")
    this.api.apiCall(this.api.getSearch()).subscribe((data)=>{
      //alert("In poster  " +this.api.getSearch())
      this.info=data
      //alert("got data  "+this.info.Title)
      //alert("before in funcall  "+this.temp2)
      this.titleInfo=this.info.Title
      //alert("after  in funcall  "+this.temp2)
      if(this.info.Title==undefined){
        this.router.navigate(['movieNotFound'])
      }
    })
  }
  onFetchData() {
    //alert("Before temp1 is"+this.temp1+"  temp2 is "+this.titleInfo)
    this.ratings.forEach(element => {
      if(element.title==this.titleInfo) {
        //alert("in if before  "+this.teju)
        //this.teju=element.rating
        //alert("in if after  "+this.teju)
        //this.pushFun(this.temp1,this.teju)
        this.ratingsInfo.push({
          rate:element.rating
        })
        //alert("ha done ")
      }
      //alert("after if")
    });
    //alert("After "+this.temp1)
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
    //alert("in ratingsSubmit "+rate)
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
    //alert("in reviewsSubmit "+rev)
    this.onAddReview(this.info.Title,rev)
    this.onSaveReview()
    this.resetReviewBox()
    this.reviewsInfo.push({
      rev:rev
    })
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
