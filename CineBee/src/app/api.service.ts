import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  str:string='Love FM';
  search(s1)
  {
    this.str=s1
  }
  apiCall()
  {
    return this.http.get(' http://www.omdbapi.com/?t='+this.str+'&apikey=8046dab1');
  }
}
