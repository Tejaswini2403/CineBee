import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  apiCall()
  {
    return this.http.get(' http://www.omdbapi.com/?s=Batman&page=2&apikey=8046dab1');
  }
}
