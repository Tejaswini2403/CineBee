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

       "Title": "Ala Vaikunthapurramuloo",

      

       "Poster": "https://m.media-amazon.com/images/M/MV5BYzVjNThjYzgtODRhYS00N2M0LTg5OWQtMTA0YjBhODJhNzU3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"

    

   },

  
   {

       "Title": "Aswathama",

     

       "Poster": "https://m.media-amazon.com/images/M/MV5BNWE3ZTc1ZjItNWIyMy00Njk4LWJkNjQtNTgzMjg3NmIzNzRlXkEyXkFqcGdeQXVyNjU0Nzg1NzY@._V1_SX300.jpg"

       

   },

 
   {

       "Title": "Sarileru Neekevvaru",

      

       "Poster": "https://m.media-amazon.com/images/M/MV5BODllNjZkODEtMGRkNS00YWQzLTg3MTYtMzg2N2U0ODI0Zjk0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg"
       
   },

   
   {

       "Title": "Hit",

       
       "Poster": "https://m.media-amazon.com/images/M/MV5BZjY5OGJhMTMtOTU2Zi00YjdjLTk3YjItMjY5NjUzN2NhMTQ5XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg"

   },

  
   {

       "Title": "Disco Raja",

     
       "Poster": "https://m.media-amazon.com/images/M/MV5BMDBlOGNlM2ItZGM3MS00YjA0LThiMjMtYTUzZmE1NWY3MjUzXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg"

   },

  
   {

       "Title": "Valayam",

      
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTA2ZWJjNDItMTcxMi00MGEwLWEyMTUtYWQ2ZDBjMTY3MjNjXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg"
        

   },

   
   {

       "Title": "Oka Chinna Viramam",


       "Poster": "https://m.media-amazon.com/images/M/MV5BOWRjMTY2YzYtMDRhMi00MTFlLWI5YmYtNjdiZTI2NjZiZDg1XkEyXkFqcGdeQXVyODk4NzY2NzY@._V1_SX300.jpg"

   },

  
   {

       "Title": "World Famous Lover",

   

      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA1MzAyZDYtNjhlZC00Mzc0LTgzNTItOTA3YzdiOWM5N2M4XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg"

   },

  
   {

       "Title": "Savaari",



       "Poster": "https://m.media-amazon.com/images/M/MV5BNjNkYjNmZTgtNWIwMy00ZGIwLWFhNGMtZjhhMzk4ODI1ZjRjXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg"


   },

  
   {

       "Title": "Entha Manchivaadavuraa",

    

       "Poster": "https://m.media-amazon.com/images/M/MV5BMDQyYzExNjAtZjU2Yi00NzFlLTk2ODItOGY4NzU5OTE5MjEyXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_SX300.jpg"

   
   },

 
   {

       "Title": "Darbar",

     

       "Poster": "https://m.media-amazon.com/images/M/MV5BMTVmODRhY2EtZmYyZi00Njk5LWIzNzUtZTllYzU4YzlkNTNhXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg"

      
   },

   {

       "Title": "Madha",

      

       "Poster": "https://m.media-amazon.com/images/M/MV5BYjk0NWY0MDgtNmI2OC00OGEwLTllYjctNmU0YzRhNDM5Mjg3XkEyXkFqcGdeQXVyNzgxMjUzNzk@._V1_SX300.jpg"

    

   },

  
   {

       "Title": "O Pitta Katha",
       "Poster": "https://m.media-amazon.com/images/M/MV5BNmY0M2ZiYzktM2EzMy00NWFlLTg2MWMtMjVjMDExOTI0NTc2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg"
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

  slides: any = [[]];
  chunk(arr) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += 6) {
      R.push(arr.slice(i, i + 6));
    }
    return R;
  }

  constructor(private router:Router, private api:APIService) { 
  }

  ngOnInit(): void {
    this.getTrending()
    //this.getTelugu()
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
    this.slides = this.chunk(this.telugu)
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
    for(let i=0;i<15;i++) {
      this.api.language("te").subscribe((data)=>{
        this.telugu.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getHindi() {
    for(let i=0;i<15;i++) {
      this.api.language("hi").subscribe((data)=>{
        this.hindi.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getEnglish() {
    for(let i=0;i<15;i++) {
      this.api.language("en").subscribe((data)=>{
        this.english.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getKannada() {
    for(let i=0;i<15;i++) {
      this.api.language("kn").subscribe((data)=>{
        this.kannada.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getTamil() {
    for(let i=0;i<15;i++) {
      this.api.language("ta").subscribe((data)=>{
        this.tamil.push({
          Title:data['results'][i]['title'],
          Poster:'https://image.tmdb.org/t/p/w500'+data['results'][i]['poster_path']
        })
      })
    }
  }
  getMalyalam() {
    for(let i=0;i<15;i++) {
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
