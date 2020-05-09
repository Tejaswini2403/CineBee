import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementSchemaRegistry } from '@angular/compiler';

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
        pass:'cinebee143',
        wishlist:[
          {
            title:"Madha",
            poster:"https://m.media-amazon.com/images/M/MV5BYjk0NWY0MDgtNmI2OC00OGEwLTllYjctNmU0YzRhNDM5Mjg3XkEyXkFqcGdeQXVyNzgxMjUzNzk@._V1_SX300.jpg"
          }
        ]
    },
    {
        fn:'Swetha',
        ln:'Gupta Gande',
        emailId:'swetha12gupta@gmail.com',
        pass:'cinebee143',
        wishlist:[
          {
            title:"Madha",
            poster:"https://m.media-amazon.com/images/M/MV5BYjk0NWY0MDgtNmI2OC00OGEwLTllYjctNmU0YzRhNDM5Mjg3XkEyXkFqcGdeQXVyNzgxMjUzNzk@._V1_SX300.jpg"
          }
        ]
    },
    {
        fn:'Vishnu',
        ln:'Sai',
        emailId:'vishnusai3206@gmail.com',
        pass:'cinebee143',
        wishlist:[
          {
            title:"Madha",
            poster:"https://m.media-amazon.com/images/M/MV5BYjk0NWY0MDgtNmI2OC00OGEwLTllYjctNmU0YzRhNDM5Mjg3XkEyXkFqcGdeQXVyNzgxMjUzNzk@._V1_SX300.jpg"
          }
        ]
    },
  ]
  raterev=[
    {
      title:"Bheeshma",
      rate:6.8,
      rev:"It is feel good movie"
    }
  ]
  feedbacks=[
    {
      feedback:'Nice application'
    }
  ]
  urlUser='https://cinebee-5f72a.firebaseio.com/users/users1.json';
  urlRateRev='https://cinebee-5f72a.firebaseio.com/RatingsReviews/raterev1.json'
  urlFeedback='https://cinebee-5f72a.firebaseio.com/Feedbacks/feedbacks1.json';
  fn='Tejaswini'
  ln='Repala'
  constructor(private http:HttpClient) { }

  saveUser(users:any[]){
    return this.http.put(this.urlUser,users)
  }
  saveRateRev(raterev:any[]) {
    return this.http.put(this.urlRateRev,raterev.slice(1))
  }
  saveFeedback(feedbacks:any[]) {
    return this.http.put(this.urlFeedback,feedbacks)
  }
  saveWishlist(em,ti,po) {
    var temp
    this.users.forEach(element => {
      if(element.emailId==em) {
        temp=element;
      }
    });
    temp.wishlist.push({
      title:ti,
      poster:po
    })
    console.log(this.users)
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
  wish
  OnWishlistFetch(email) {
    this.users.forEach(element => {
      if(element.emailId==email){
        this.wish=element.wishlist;
      }
    });
    return this.wish;
  }

}
