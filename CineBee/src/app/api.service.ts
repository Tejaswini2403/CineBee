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
  apiCall(search)
  {
    //alert("in api service  "+this.str)
    if(search=='')
      search=this.str;
    return this.http.get(' http://www.omdbapi.com/?t='+search+'&apikey=8046dab1');
  }
  setSearch(s) {
    this.str=s;
  }
  getSearch() {
    return this.str
  }
}
