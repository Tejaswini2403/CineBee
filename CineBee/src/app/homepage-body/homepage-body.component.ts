import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

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
  telugu=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  hindi=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  english=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  kannada=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  tamil=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  malyalam=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  adventure=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  horror=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  action=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  comedy=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  family=[
    {
      Title:"Sye Raa Narasimha Reddy",
      Poster:"https://image.tmdb.org/t/p/w500/wswp8DlifUHzBFrGl7Y8bphF1gF.jpg"
    }
  ]
  constructor(private router:Router, private api:APIService) { 
  }

  ngOnInit(): void {
    this.getTrending()
    this.getTelugu()
    this.getHindi()
    this.getEnglish()
    this.getKannada()
    this.getTamil()
    this.getMalyalam()
    this.getAdventure()
    this.getHorror()
    this.getAction()
    this.getFamily()
    this.getComedy()
  }

  getTrending() {
    for(let i=0;i<5;i++) {
      this.api.trending("te").subscribe((data)=>{
        this.trending.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.trending("hi").subscribe((data)=>{
        this.trending.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.trending("en").subscribe((data)=>{
        this.trending.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getTelugu() {
    for(let i=0;i<12;i++) {
      this.api.language("te").subscribe((data)=>{
        this.telugu.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getHindi() {
    for(let i=0;i<12;i++) {
      this.api.language("hi").subscribe((data)=>{
        this.hindi.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getEnglish() {
    for(let i=0;i<12;i++) {
      this.api.language("en").subscribe((data)=>{
        this.english.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getKannada() {
    for(let i=0;i<12;i++) {
      this.api.language("kn").subscribe((data)=>{
        this.kannada.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getTamil() {
    for(let i=0;i<12;i++) {
      this.api.language("ta").subscribe((data)=>{
        this.tamil.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getMalyalam() {
    for(let i=0;i<12;i++) {
      this.api.language("ml").subscribe((data)=>{
        this.malyalam.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getAction() {
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("28","te").subscribe((data)=>{
        this.action.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("28","hi").subscribe((data)=>{
        this.action.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("28","en").subscribe((data)=>{
        this.action.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getHorror() {
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("27","te").subscribe((data)=>{
        this.horror.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("27","hi").subscribe((data)=>{
        this.horror.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("27","en").subscribe((data)=>{
        this.horror.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getComedy() {
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("35","te").subscribe((data)=>{
        this.comedy.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("35","hi").subscribe((data)=>{
        this.comedy.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("35","en").subscribe((data)=>{
        this.comedy.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getAdventure() {
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("12","te").subscribe((data)=>{
        this.adventure.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("12","hi").subscribe((data)=>{
        this.adventure.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("12","en").subscribe((data)=>{
        this.adventure.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getFamily() {
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("10751","te").subscribe((data)=>{
        this.family.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("10751","hi").subscribe((data)=>{
        this.family.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
    for(let i=0;i<5;i++) {
      this.api.genreAndLanguage("10751","en").subscribe((data)=>{
        this.family.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  onPosterClick(tit) {
    this.api.setSearch(tit);
    this.router.navigate(['poster']);
  }

}
