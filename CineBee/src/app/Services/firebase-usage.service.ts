import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUsageService {
  url='https://cinebee-5f72a.firebaseio.com/users.json';
  constructor(private http:HttpClient) { }

  saveUser(users:any[]){
    //return this.http.post(this.url,users);
    return this.http.put(this.url,users)
  }
}
