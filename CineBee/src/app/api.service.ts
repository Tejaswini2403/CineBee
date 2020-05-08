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
  trending(lang) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=10cd0855af375ef0e13db6f232000053&with_original_language='+lang+'&sort_by=release_date.dsc&year=2020');
  }
  language(lang) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=10cd0855af375ef0e13db6f232000053&with_original_language='+lang);
  }
  genreAndLanguage(ge,la) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=10cd0855af375ef0e13db6f232000053&with_original_language='+la+'&with_genres='+ge)
  }
}
