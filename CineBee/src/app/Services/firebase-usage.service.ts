import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUsageService {
  bool:boolean=false;
  users=[
    {
        fn:'Tejaswini',
        ln:'Repala',
        emailId:'trepala999@gmail.com',
        pass:'cinebee143'
    },
    {
        fn:'Swetha',
        ln:'Gupta Gande',
        emailId:'swetha12gupta@gmail.com',
        pass:'cinebee143'
    },
    {
        fn:'Vishnu',
        ln:'Sai',
        emailId:'vishnusai3206@gmail.com',
        pass:'cinebee143'
    },
  ]
  ratings=[
    {
      title:'Bheeshma',
      rating:'8.5'
    }
  ]
  reviews=[
    {
      title:'Bheeshma',
      review:'Good'
    }
  ]
  urlUser='https://cinebee-5f72a.firebaseio.com/users/users1.json';
  urlRating='https://cinebee-5f72a.firebaseio.com/Ratings/ratings1.json';
  urlReview='https://cinebee-5f72a.firebaseio.com/Reviews/reviews1.json';
  fn='Tejaswini'
  ln='Repala'
  constructor(private http:HttpClient) { }

  saveUser(users:any[]){
    return this.http.put(this.urlUser,users)
  }
  saveRating(ratings:any[]) {
    //alert("in save ratings  "+ratings)
    return this.http.put(this.urlRating,ratings)
  }
  saveReview(reviews:any[]) {
    //alert("in save reviews  "+reviews)
    return this.http.put(this.urlReview,reviews)
  }
  fun(email,password)
  {
    this.users.forEach(element => {
      if(element.emailId==email&&element.pass==password){
        this.bool=true;
      }
    });
    return this.bool;
  }
  fetchData() {
    return this.http.get(this.urlUser)
  }
  onFirstNameFecth(email) {
    this.users.forEach(element => {
      if(element.emailId==email){
        this.fn=element.fn;
      }
    });
    return this.fn;
  }
  onLastNameFecth(email) {
    this.users.forEach(element => {
      if(element.emailId==email){
        this.ln=element.ln;
      }
    });
    return this.ln;
  }
  temp
  OnFetchRatings(Title) {
    alert("in on fetch ratings")
    this.ratings.forEach(element => {
      if(element.title==Title)
        this.temp.push(element.rating)
    })
    alert(this.temp)
    return this.temp
  }
}
