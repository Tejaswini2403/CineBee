import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  str:string='Bheeshma';
  search(s1)
  {
    this.str=s1
  }
  apiCall(search)
  {
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
