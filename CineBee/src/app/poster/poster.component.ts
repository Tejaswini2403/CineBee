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
  givenRate=""
  showReview=false
  showRating=false
  RatingsReviews
  titleInfo:string='Hello'

  constructor(private api:APIService,private router:Router,private firebase:FirebaseUsageService,private user:UserService) { }

  ngOnInit(): void {
    this.funCall()
    this.raterev=this.firebase.raterev
  }

  funCall() {
    //alert("in funcall")
    this.api.apiCall(this.api.getSearch()).subscribe((data)=>{
      this.info=data
      this.titleInfo=this.info.Title
      //alert(this.titleInfo+"  hd")
      this.onFetchData()
      if(this.info.Title==undefined){
        this.router.navigate(['movieNotFound'])
      }
    })
  }
  onFetchData() {
    //alert("entered onfetchdata  "+"  "+this.titleInfo)
    //const x=await this.funCall()
    //alert("entered1111 onfetchdata  "+this.RatingsReviews+"  "+this.titleInfo)
    this.RatingsReviews=this.firebase.fetchRateRev(this.titleInfo)
    //alert("leaving onfetchdata  "+this.titleInfo+"  "+this.RatingsReviews)
  }
  OnSubmit(e) {
    e.preventDefault();
    var rate = this.givenRate;
    var rev = e.target.elements[0].value;
    if(rate==""||rev=="")
      alert("Please provide both Rating and Review")
    else {
      this.onAdd(this.info.Title,rate,rev)
      this.onSave()
      this.showReview=false;
    }
    this.onFetchData()
  }
  onAdd(title,rating,review) {
    var fl=true;
    this.raterev.forEach(element => {
      if(element.userMail==this.user.getEmail()&&element.title==title) {
        element.rate=rating
        element.rev=review
        fl=false
      }
    });
    if(fl) {
      this.raterev.push({
        userMail:this.user.getEmail(),
        title:title,
        rate:rating,
        rev:review
      })
    }
  }
  onSave() {
    this.firebase.saveRateRev(this.raterev).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error),
    )
  }
  give() {
    if(this.user.getUserLoggedIn()) {
      this.showReview=true
      this.showRating=true
    }
    else {
      alert("Please Login to your account to provide rating and review")
      this.router.navigate(['login'])
    }
  }
  onGiveRating(x) {
    this.showRating=false;
    this.givenRate=x
  }
  addToWishlist() {
    if(this.user.getUserLoggedIn()) {
      var email=this.user.getEmail();
      this.firebase.saveWishlist(email,this.info.Title,this.info.Poster)
    }
    else {
      alert("Please Login to your account to add to your wishlist")
      this.router.navigate(['login'])
    }
  }

}
