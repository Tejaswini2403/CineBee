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
  raterev
  showBox=false
  show=false
  RatingsReviews=[
    {
      rate:6.8,
      rev:"It is feel good movie"
    }
  ]
  titleInfo:string='Hello'

  constructor(private api:APIService,private router:Router,private firebase:FirebaseUsageService,private user:UserService) { }

  ngOnInit(): void {
    this.funCall()
    this.raterev=this.firebase.raterev
    this.onFetchData()
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
    alert("entered")
    this.firebase.raterev.slice(1).forEach(element => {
      if(element.title==this.titleInfo) {
        this.RatingsReviews.push({
          rate:element.rate,
          rev:element.rev
        })
      }
    });
    console.log(this.RatingsReviews)
    this.show=true
  }
  OnSubmit(e) {
    e.preventDefault();
    var rate = e.target.elements[0].value;
    var rev = e.target.elements[1].value;
    if(rate==""||rev=="")
      alert("Please provide both Rating and Review")
    else {
      this.onAdd(this.info.Title,rate,rev)
      this.onSave()
      this.RatingsReviews.push({
        rate:rate,
        rev:rev
      })
      this.resetBox()
    }
  }
  onAdd(title,rating,review) {
    this.raterev.push({
      title:title,
      rating:rating,
      review:review
    })
  }
  onSave() {
    this.firebase.saveRateRev(this.raterev).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error),
    )
  }
  give() {
    if(this.user.getUserLoggedIn())
      this.showBox=true
    else
      alert("Please Login to your account to provide rating and review")
  }
  addToWishlist() {
    if(this.user.getUserLoggedIn()) {
      var email=this.user.getEmail();
      this.firebase.saveWishlist(email,this.info.Title,this.info.Poster)
      alert("Added to your wishlist")
    }
    else 
      alert("Please Login to your account to add to your wishlist")
  }
  resetBox() {
    this.showBox=false;
  }

}
