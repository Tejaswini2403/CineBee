import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  apiCall()
  {
    return this.http.get('https://api.themoviedb.org/3/trending/movie/week?api_key=10cd0855af375ef0e13db6f232000053');
  }
}
