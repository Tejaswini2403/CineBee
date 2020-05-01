import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  url='https://cinebee-5f72a.firebaseio.com/users.json';
  constructor(private http:HttpClient) { }

  saveUser(users:any[]){
    return this.http.put(this.url,users)
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
    return this.http.get(this.url)
  }
}
