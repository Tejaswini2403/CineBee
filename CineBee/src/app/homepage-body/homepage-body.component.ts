import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-homepage-body',
  templateUrl: './homepage-body.component.html',
  styleUrls: ['./homepage-body.component.css']
})
export class HomepageBodyComponent implements OnInit {
  trending=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  constructor(private api:APIService) { 
  }

  ngOnInit(): void {
    this.getTrending()
  }

  getTrending() {
    for(let i=0;i<5;i++) {
      this.api.teluguTrending().subscribe((data)=>{
        this.trending.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.hindiTrending().subscribe((data)=>{
        this.trending.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.englishTrending().subscribe((data)=>{
        this.trending.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=5;i<10;i++) {
      this.api.teluguTrending().subscribe((data)=>{
        this.trending.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=5;i<10;i++) {
      this.api.hindiTrending().subscribe((data)=>{
        this.trending.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=5;i<10;i++) {
      this.api.englishTrending().subscribe((data)=>{
        this.trending.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
}
