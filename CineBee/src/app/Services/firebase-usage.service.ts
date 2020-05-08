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
  ratings=[
    {
      title:'Bheeshma',
      rating:'8.5'
    },
    {
      title:'Bheeshma',
      rating:'9.2'
    },
    {
      title:'Bheeshma',
      rating:'6.5'
    }
  ]
  reviews=[
    {
      title:'Bheeshma',
      review:'Nice feel good movie... I loved it'
    }
  ]
  feedbacks=[
    {
      feedback:'Nice application'
    }
  ]
  urlUser='https://cinebee-5f72a.firebaseio.com/users/users1.json';
  urlRating='https://cinebee-5f72a.firebaseio.com/Ratings/ratings1.json';
  urlReview='https://cinebee-5f72a.firebaseio.com/Reviews/reviews1.json';
  urlFeedback='https://cinebee-5f72a.firebaseio.com/Feedbacks/feedbacks1.json';
  fn='Tejaswini'
  ln='Repala'
  constructor(private http:HttpClient) { }

  saveUser(users:any[]){
    return this.http.put(this.urlUser,users)
  }
  saveRating(ratings:any[]) {
    return this.http.put(this.urlRating,ratings)
  }
  saveReview(reviews:any[]) {
    return this.http.put(this.urlReview,reviews)
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

}
