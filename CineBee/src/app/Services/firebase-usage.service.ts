import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementSchemaRegistry } from '@angular/compiler';
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
        pass:'CineBee@143',
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
        pass:'CineBee@143',
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
        pass:'CineBee@143',
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
      userMail:"trepala999@gmail.com",
      title:"Bheeshma",
      rate:3,
      rev:"Good movie"
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
    return this.http.put(this.urlRateRev,raterev)
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
    var f=false;
    temp.wishlist.slice(1).forEach(element => {
      if(element.title==ti)
        f=true;
    });
    if(f)
      alert("Already exists in your wishlist")
    else {
      temp.wishlist.push({
        title:ti,
        poster:po
      })
      alert("Added to your wishlist")
    }
    //console.log(this.users)
  }

  isUserExist(em) {
    var flag=false;
    this.users.forEach(element => {
      if(element.emailId==em)
        flag=true;
    });
    return flag;
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
      if(element.emailId==email) {
        this.wish=element.wishlist;
      }
    });
    return this.wish;
  }
  
  fetchRateRev(tit) {
    var rr=[
      {
        rate:5,
        rev:"This movie is strong, good script, great casting, excellent acting, and over the top directing. It is hard to fine a movie done this well.Even if the viewer does not like this type of movies, he or she will watch the entire film, the audiences is glued to what will happen next as the film progresses. Its about, family, loyalty, greed, relationships, and real life."
      },
      {
        rate:4,
        rev:"This film is pretty much the perfection of the craft. Every single aspect of it is outstanding. There are so many iconic lines and moments throughout the movie that have been replicated and entrenched in culture over the years. There really isn't too much else to say. This is truly the peak of filmmaking."
      },
      {
        rate:2,
        rev:"Since the trailer seemed to be good , but the movie ,not worth watching"
      },
      {
        rate:3,
        rev:"This movie was fresh and enjoyable comedy. Everything was straight forward. It is worth watching because it is a unique movie and there is nothing to do but laugh the whole time."
      },
      {
        rate:2,
        rev:"There are few good moments, other than that it's just a big mental fest"
      }
    ]
    //alert("in fetch raterev  "+rr+"  "+tit)
    this.raterev.forEach(element => {
      if(element.title==tit) {
        //alert(element.rate+"  "+element.rev)
        rr.push({
          rate:element.rate,
          rev:element.rev
        })
      }
    })
    //alert("leaving fetch raterev  "+rr)
    return rr;
  }

}