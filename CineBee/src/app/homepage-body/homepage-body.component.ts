import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-body',
  templateUrl: './homepage-body.component.html',
  styleUrls: ['./homepage-body.component.css']
})
export class HomepageBodyComponent implements OnInit {
  
  /*trending=[
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
  malayalam=[
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
  ]*/
  
  Telugu=[
    {

       "Title": "Ala Vaikunthapurramuloo",
       "Poster": "https://m.media-amazon.com/images/M/MV5BYzVjNThjYzgtODRhYS00N2M0LTg5OWQtMTA0YjBhODJhNzU3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
   },
   {
    "Title": "Bheeshma",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTdhODUxYzYtNzc1Zi00YTMzLThhYzAtMTk3YzIwMjQwYzMwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg",
  },
   {
      "Title": "Sarileru Neekevvaru",
       "Poster": "https://m.media-amazon.com/images/M/MV5BODllNjZkODEtMGRkNS00YWQzLTg3MTYtMzg2N2U0ODI0Zjk0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg",
    },
    {

       "Title": "Hit",
       "Poster": "https://m.media-amazon.com/images/M/MV5BZjY5OGJhMTMtOTU2Zi00YjdjLTk3YjItMjY5NjUzN2NhMTQ5XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg",
   },
    {

       "Title": "Disco Raja",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDBlOGNlM2ItZGM3MS00YjA0LThiMjMtYTUzZmE1NWY3MjUzXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg",
   },
  {
       "Title": "Valayam",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTA2ZWJjNDItMTcxMi00MGEwLWEyMTUtYWQ2ZDBjMTY3MjNjXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg",
  },
   {
       "Title": "Oka Chinna Viramam",
       "Poster": "https://m.media-amazon.com/images/M/MV5BOWRjMTY2YzYtMDRhMi00MTFlLWI5YmYtNjdiZTI2NjZiZDg1XkEyXkFqcGdeQXVyODk4NzY2NzY@._V1_SX300.jpg",
    },
    {
      "Title": "Aswathama",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWE3ZTc1ZjItNWIyMy00Njk4LWJkNjQtNTgzMjg3NmIzNzRlXkEyXkFqcGdeQXVyNjU0Nzg1NzY@._V1_SX300.jpg",
    },
    {
       "Title": "World Famous Lover",
       "Poster": "https://m.media-amazon.com/images/M/MV5BOTA1MzAyZDYtNjhlZC00Mzc0LTgzNTItOTA3YzdiOWM5N2M4XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg", 
   },
   {
    "Title": "Savaari",
     "Poster": "https://m.media-amazon.com/images/M/MV5BNjNkYjNmZTgtNWIwMy00ZGIwLWFhNGMtZjhhMzk4ODI1ZjRjXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg",
   },
    {
       "Title": "Entha Manchivaadavuraa",
       "Poster": "https://m.media-amazon.com/images/M/MV5BMDQyYzExNjAtZjU2Yi00NzFlLTk2ODItOGY4NzU5OTE5MjEyXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_SX300.jpg",
   },
    {
        "Title": "Darbar",
         "Poster": "https://m.media-amazon.com/images/M/MV5BMTVmODRhY2EtZmYyZi00Njk5LWIzNzUtZTllYzU4YzlkNTNhXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg",
    },
    {
       "Title": "Madha",
       "Poster": "https://m.media-amazon.com/images/M/MV5BYjk0NWY0MDgtNmI2OC00OGEwLTllYjctNmU0YzRhNDM5Mjg3XkEyXkFqcGdeQXVyNzgxMjUzNzk@._V1_SX300.jpg",
   },
   {
     "Title": "O Pitta Katha",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmY0M2ZiYzktM2EzMy00NWFlLTg2MWMtMjVjMDExOTI0NTc2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg",
  }
]
Hindi=[
            {
                "Title": "Angrezi Medium",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjlkZjBjZmUtNjZjNS00ODlkLWIzODYtODY0NmViN2E0MjIxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            },
            {
                "Title": "Baaghi 3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZTAxNWE2MDItZWFlNS00MWM1LWI1ZjQtN2I5NDBhNWYzZjNhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
               
            },
            {
                "Title": "Thappad",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNWQ1Yzc2NDYtN2RjNC00ZGIyLWJkMjItMDlkODVhNjg0OTczXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
                
            },
            {
                "Title": "Bhoot: Part One - The Haunted Ship",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzFlZjA1YzAtMmYwNy00NjQ5LWJkNDUtNzczYjc0NGViNjRjXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
                
            },
            {
                "Title": "Love Aaj Kal",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
               
            },
            {
                "Title": "Jawaani Jaaneman",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjY1OTI0NjEtNzRmZS00NzFlLTlhMTgtNjdmNWY2MDQ3YzIwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
                
            },
            {
                "Title": "Panga",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMDFlMjdmOTktMjQyNi00MjE4LWFiMTMtZmNhYzFjYzMyYTRjXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
            },
            {
                "Title": "Jai Mummy Di",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjEyMjM0ZTYtNzY5Yy00YjE2LWFhZDUtYWY3YTVjOWE0MTAzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            },
            {
                "Title": "Tanhaji: The Unsung Warrior",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMDc5ZmQ3MzUtYTY4OS00YTE3LTkwNmItNmQ2ODIwNWM3MzY1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            },
            {
                "Title": "Chhapaak",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjZjYzRhMmEtMTU0Ny00YWI4LThiZjEtNWZjMDQ3MTgwZmVhXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
               
            },
            {
                "Title": "Good Newwz",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNWQzNGQxY2YtNWZjOC00MGU4LTgzNTUtODliOGQzYTkxYzM1XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
                
            },
            {
                "Title": "Guns of Banaras",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMDM2NjlhNWYtY2Q2MS00ZDgyLWEyMGItMDY3NzAzOTczZWE2XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
            },
            {
                "Title": "Street Dancer 3D",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYjZlMTg1NDktNzI2My00Mjg2LTk3NzktZWQ5ZDJhYmJkNGExXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
            },
            {
                "Title": "Shubh Mangal Zyada Saavdhan",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTNhOWM4Y2MtZDhjNC00ZTZmLWJkMDUtNGE4Nzg2MzhmMzY0XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
                
            },
            {
                "Title": "Sonu Ke Titu Ki Sweety",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGE5MTgtN2YxYS00ODYyLWE1YzQtYzNlMzAyMTBlMWZhXkEyXkFqcGdeQXVyMzcwOTk0MzU@._V1_SX300.jpg",

            }
        ]
Tamil= [
        
  {
      "Title": "Kannum Kannum Kollaiyadithaal",
       "Poster": "https://m.media-amazon.com/images/M/MV5BN2M1MjM0NTUtODlhZS00MWEwLWE3ZWEtZmMzOTNlMmM1MTYyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
 },
  {
      "Title": "Draupathi",
       "Poster": "https://m.media-amazon.com/images/M/MV5BMzU3N2MyMjItNGVmYy00OTY1LThkZDctYWQ0MWE1ODM1YzZmXkEyXkFqcGdeQXVyOTEyMDA0Mzg@._V1_SX300.jpg",
 },
 {
      "Title": "Dharala Prabhu",
       "Poster": "https://m.media-amazon.com/images/M/MV5BOTM4ZmYyNWUtYzU4MS00ODBiLWI4ZTctODgzNzhhZjg2YmFiXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_SX300.jpg",
  },
  {
      "Title": "Dagaalty",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMThmMzVmZmItNjhlYy00NTQ2LTk1NWQtNDU2N2YxOWU0MTRkXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_SX300.jpg",
 },
{
    "Title": "Taana",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmMwZWRkMDktMDQyYS00NmNlLWEzMDMtMTVkYjg3NmZlNGU1XkEyXkFqcGdeQXVyMzAzMzkzNTU@._V1_SX300.jpg",
  },
  {
    "Title": "Oh My Kadavule",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzRiZGZmYWMtMmNhYy00NmE3LTgxZjItMDc1YzMxNTExM2VlXkEyXkFqcGdeQXVyMTEwNjA3NjE1._V1_SX300.jpg",
  },
 {
      "Title": "Seeru",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmYxN2QyN2YtYjhiMS00ZDczLWEyODctNDFkM2UwNjk5MmEwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg",
  },
{
      "Title": "Vaanam Kottattum",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDZiNzkxZGUtM2FmZC00NjZmLWE3YzItYjA2MDJlNTJkNGE1XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg",
  },
 {
   "Title": "Adavi",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2E5YTgwY2UtZTRiMS00ZmE0LTg1ODAtNGIxN2I5NDIzYTM2XkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_SX300.jpg",
   },
  {
  "Title": "Irumbu manithan",
       "Poster": "https://m.media-amazon.com/images/M/MV5BZGVkOWI4YzUtYTU1ZC00NzZjLTk4ZDgtODAxZDg0OGVlYzlhXkEyXkFqcGdeQXVyMTA0OTExMjQw._V1_SX300.jpg",
   },
 {
    "Title": "Galtha",
   "Poster": "https://m.media-amazon.com/images/M/MV5BMWVlZmNkMjctN2VkNS00ODA2LWEwZjYtM2EyMzFiN2M1NzUzXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_SX300.jpg",
  },
  {

    "Title": "Indha Nilai Maarum",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWZjN2M3OGYtZjg5Zi00MzU2LWFkZDctYWNhYjc3MGI1ZDMxXkEyXkFqcGdeQXVyNDgzODc1NDk@._V1_SX300.jpg",
     }

]
English= [
  {
     "Title": "Sonic the Hedgehog",
     "Poster": "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg",
 },
 {
     "Title": "Bloodshot",
     "Poster": "https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_SX300.jpg",
 },
  {
     "Title": "The Gentlemen",
   "Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
 },
{
     "Title": "Dolittle",
   "Poster": "https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
 },
 {
   "Title": "Bad Boys for Life",
     "Poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg", 
 },
 {
   "Title": "Wild Karnataka",
     "Poster": "https://m.media-amazon.com/images/M/MV5BYWNkMjcyODAtMGIwYi00YTA5LTg0Y2EtNmU2YzdhZTA3YjA4XkEyXkFqcGdeQXVyMjcwMzg5MDQ@._V1_SX300.jpg",
 },
 {
     "Title": "Underwater",
   "Poster": "https://m.media-amazon.com/images/M/MV5BNzM0OGZiZWItYmZiNC00NDgzLTg1MjMtYjM4MWZhOGZhMDUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
 },
 {
   "Title": "Jumanji: The Next Level",
     "Poster": "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
 },
 {
     "Title": "Bombshell",
     "Poster": "https://m.media-amazon.com/images/M/MV5BZjlhOWE3YjktY2MzOC00ZmQ1LWIwNjgtZmVhZmFjZGExMzgyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
 },
 {
     "Title": "Onward",
     "Poster": "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
 },
 {
 "Title": "The Invisible Man",
       "Poster": "https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
 },
 {
   "Title": "The Last Full Measure",
     "Poster": "https://m.media-amazon.com/images/M/MV5BOTQyMjBmNDAtNDA0YS00ODFiLTk2OTUtMWM5NzI4NjM1YzhhXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg",
 },
 {
     "Title": "Just Mercy",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmM4YzA5NjUtZGEyOS00YzllLWJmM2UtZjhhNmJhM2E1NjUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
 {
   "Title": "Fantasy Island",
     "Poster": "https://m.media-amazon.com/images/M/MV5BOWE2ODZhYWYtNTFiYy00MjdmLWIzZGEtNTkyOTc1NDIwMjk4XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
   },
  {
     "Title": "Like a Boss",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjAyZDRjMjQtODE3MC00ODI2LTgxODktZThjYTgzZDE5NTc4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
 }
]
Kannada= [
  {
      "Title": "Avane Srimannarayana",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzJmNDBlMzUtMjJjMy00YjRjLTliY2MtNjcwMmExODYzYTZmXkEyXkFqcGdeQXVyOTMxMTk2MTc@._V1_SX300.jpg",
  },
  {
      "Title": "Ondu Shikariya Kathe",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzUxMDYzMjUtZDEzYi00NWMxLThkZGYtYTgwNDEwZWY3MWI0XkEyXkFqcGdeQXVyOTU0ODcyNTY@._V1_SX300.jpg",
  },
  {
     "Title": "3rd Class",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODk5NzQ5ZTktYTJlNi00YWI5LWI5NTMtMjU1ZTY0NmQ5NTM2XkEyXkFqcGdeQXVyMTExOTY0NTI1._V1_SX300.jpg",
  },
  {
    "Title": "Kaanadante Maayavadanu",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDJhZjcyZTQtNWEyYS00M2FlLWJlMTktY2E3ODdiOGM2NGI4XkEyXkFqcGdeQXVyNzcxMDc2NzA@._V1_SX300.jpg",
    },
   {
      "Title": "Love Mocktail",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDEwODVjYWQtYTVhNC00YzU0LWFjYTQtZmVlNDk0YmQ1YTY4XkEyXkFqcGdeQXVyNjIwNzA2NzY@._V1_SX300.jpg",
  },
  {
    "Title": "Navelru Half Boiled",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWUyNWNlNWItNDIzYS00ODBlLWI2MzYtMzExNjc4N2Q2MjczXkEyXkFqcGdeQXVyMTA0NzIyMDc1._V1_SX300.jpg",
  },
  {
     "Title": "Gadinaadu",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3NDAxZjktODAzMS00ZmFlLTg1NTYtZjQzMTA2YTJkMjljXkEyXkFqcGdeQXVyNjY0OTkzMjk@._V1_SX300.jpg",
  },
 {
      "Title": "Popcorn Monkey Tiger",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmRiOTNmMzctYTc1Mi00YzRkLWE0ZTEtZGY0YjE0MjYyMmU0XkEyXkFqcGdeQXVyMTAzNTI2Njcy._V1_SX300.jpg",
  },
 {
      "Title": "Gift Box",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2IyYzdhZTctODVlZC00ZTZjLThkMTktNmEzY2UwZDI4MzhmXkEyXkFqcGdeQXVyNjU0MDM3OTk@._V1_SX300.jpg",
 },
 {
     "Title": "Saagutha Doora Doora",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGU2OTE0NjQtYzFlMS00OWU1LTgwNmUtMTE5ZjljMDE3OTZmXkEyXkFqcGdeQXVyMTA0NzIyMDc1._V1_SX300.jpg",
  },
  {
       "Title": "India vs England",
       "Poster": "https://m.media-amazon.com/images/M/MV5BZTk1NTM4NmMtMjg3My00OTk2LWFjMWEtMWZlOTBjZTNlN2ZiXkEyXkFqcGdeQXVyMTEwMDA2Mzc4._V1_SX300.jpg",
  }
]
Malayalam=[
  {
      "Title": "Dhamaka",
       "Poster": "https://m.media-amazon.com/images/M/MV5BYzg0MjA4NWQtMDdiYS00NWI0LTk0ZWEtMDIyNDljMTlkNjA4XkEyXkFqcGdeQXVyMzQ5Njc3NzU@._V1_SX300.jpg",
 },
  {
    "Title": "Thallumpidi",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDg5MDBkMDgtODU3My00NTQxLWFhNDgtZDg2NDQ0MGM5N2JhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
  },
 {
      "Title": "Maarjaara Oru Kalluvacha Nuna",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmY2YzlkMzUtYzMxYS00MmViLTkyZjctMzZlNDEwNWMwNzY2XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
 },
  {
    "Title": "Kuttiyappanum Daivadhootharum",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjYxMmE0YzItNzE3Mi00MTg0LWE0NzMtNTk3YzczZTE5YTBhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
  },
  {
    "Title": "Velathaan",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTIxMTBhMTgtYTI5OS00ZWRhLWI2NGQtN2IzNzg0YWQ0ZDFiXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
   } ,
  {
    "Title": "Anjaam Pathiraa",
     "Poster": "https://m.media-amazon.com/images/M/MV5BNjYxMWUwNGUtZmRmMy00MDZlLTgwNDMtODVlOGFjMTBlNGJkXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
  },
  {
    "Title": "Kalamandalam Hyderali",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTJjNzMzM2UtNTE4ZS00M2Y4LTgxYTctMWIwMGQxZDU3YzkxXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
   },
  {
       "Title": "Al Mallu",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmU4N2QzOGQtZTNlNi00NDI2LWFkMTYtYjJkODc5YmNlN2ZhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
  },
  {
      "Title": "Kottayam",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjgyNmM5MDItNjczOC00YjlmLTlmOGQtOTYwOTA1Njk0MDY2XkEyXkFqcGdeQXVyMzI0NjI4Njk@._V1_SX300.jpg",
  },
  {
      "Title": "Gauthamante Radham",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTYxMGFiMWUtYThjOC00ODkwLTgyM2EtYmQyYTlkOGRjNDU2XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
  },
  {
   "Title": "Pachamanga",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjNmZTY4OGYtZTdmYi00MDgyLWI3NjMtZTNmNGNlNDM4NTdiXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
  },
  {
    "Title": "Uriyattu",
       "Poster": "https://m.media-amazon.com/images/M/MV5BZmMwODU4NTUtZjZhYy00ZTBiLWIxZTYtODM4YmY1ZTMwZjRhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
   },
   {
    "Title": "Isha",
     "Poster": "https://m.media-amazon.com/images/M/MV5BMTZjZjM3NTQtOTFmOS00ZGI3LWI2MGQtMGE3MWNlZTE2OWM3XkEyXkFqcGdeQXVyMTExNzA5NzE4._V1_SX300.jpg",
   },
  {
      "Title": "Love FM",
     "Poster": "https://m.media-amazon.com/images/M/MV5BYjYzNDk2ZWMtMjBhNC00MWUyLTg2YTYtMmY1MzYyMjI3NGE2XkEyXkFqcGdeQXVyNDE3MjYxODQ@._V1_SX300.jpg",
    },
  {
     "Title": "Varkey",
       "Poster": "https://m.media-amazon.com/images/M/MV5BNjVjMjdhNWEtNjcwNy00ZDFjLTk4YWMtMDc1NjI2NmNkZjhjXkEyXkFqcGdeQXVyNjM3NjI0Mjk@._V1_SX300.jpg",         
 }
]
slideshow=[
  {

    "Title": "Ala Vaikunthapurramuloo",
    "Poster": "../../assets/images/trendingMovies/alaVaikuntapurramlo.jpg",
},
{
    "Title": "Baaghi 2",
    "Poster": "../../assets/images/trendingMovies/baaghi.jpg",
},
{
  "Title": "Love Moctail",
  "Poster": "../../assets/images/trendingMovies/loveMoctail.webp",
},
{
  "Title": "Joker",
  "Poster": "../../assets/images/loginImg/img3.jpg",
},
{
   "Title": "Sarileru Neekevvaru",
    "Poster": "../../assets/images/trendingMovies/sarileruNekuevaru.jpg",
 },
  {
    "Title": "Avengers: Endgame",
    "Poster": "../../assets/images/trendingMovies/AvengersEndgame.jpg",
  },
  {
    "Title": "K.G.F: Chapter 1",
    "Poster": "../../assets/images/trendingMovies/kgf.jpg",
  }
]

Action=[
  {
    "Title": "Bheeshma",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTdhODUxYzYtNzc1Zi00YTMzLThhYzAtMTk3YzIwMjQwYzMwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg",
  },
  {
    "Title": "Ala Vaikunthapurramuloo",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzVjNThjYzgtODRhYS00N2M0LTg5OWQtMTA0YjBhODJhNzU3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    "Title": "Baaghi 3",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTAxNWE2MDItZWFlNS00MWM1LWI1ZjQtN2I5NDBhNWYzZjNhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
   
  },
  {
    "Title": "Aswathama",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWE3ZTc1ZjItNWIyMy00Njk4LWJkNjQtNTgzMjg3NmIzNzRlXkEyXkFqcGdeQXVyNjU0Nzg1NzY@._V1_SX300.jpg",
  },
  {
    "Title": "Sarileru Neekevvaru",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODllNjZkODEtMGRkNS00YWQzLTg3MTYtMzg2N2U0ODI0Zjk0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg",
  },
  {
    "Title": "Disco Raja",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDBlOGNlM2ItZGM3MS00YjA0LThiMjMtYTUzZmE1NWY3MjUzXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg"
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
    "Title": "Tanhaji: The Unsung Warrior",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDc5ZmQ3MzUtYTY4OS00YTE3LTkwNmItNmQ2ODIwNWM3MzY1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
},
  {
    "Title": "Dagaalty",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMThmMzVmZmItNjhlYy00NTQ2LTk1NWQtNDU2N2YxOWU0MTRkXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_SX300.jpg"
  },
  {
    "Title": "Taana",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmMwZWRkMDktMDQyYS00NmNlLWEzMDMtMTVkYjg3NmZlNGU1XkEyXkFqcGdeQXVyMzAzMzkzNTU@._V1_SX300.jpg"
  },
  {
    "Title": "Seeru",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmYxN2QyN2YtYjhiMS00ZDczLWEyODctNDFkM2UwNjk5MmEwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg"
  },
  {
    "Title": "Sonic the Hedgehog",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
  },
  {
    "Title": "Bloodshot",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_SX300.jpg"
  },
  {
    "Title": "The Gentlemen",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
  },
  {
    "Title": "Guns of Banaras",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDM2NjlhNWYtY2Q2MS00ZDgyLWEyMGItMDY3NzAzOTczZWE2XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
},
  {
    "Title": "Bad Boys for Life",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Underwater",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzM0OGZiZWItYmZiNC00NDgzLTg1MjMtYjM4MWZhOGZhMDUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Jumanji: The Next Level",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "The Last Full Measure" ,
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTQyMjBmNDAtNDA0YS00ODFiLTk2OTUtMWM5NzI4NjM1YzhhXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg"
  },
  {
    "Title": "Avane Srimannarayana",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzJmNDBlMzUtMjJjMy00YjRjLTliY2MtNjcwMmExODYzYTZmXkEyXkFqcGdeQXVyOTMxMTk2MTc@._V1_SX300.jpg"
  },
  {
    "Title": "3rd Class",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODk5NzQ5ZTktYTJlNi00YWI5LWI5NTMtMjU1ZTY0NmQ5NTM2XkEyXkFqcGdeQXVyMTExOTY0NTI1._V1_SX300.jpg"
  },
  {
    "Title": "Popcorn Monkey Tiger",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmRiOTNmMzctYTc1Mi00YzRkLWE0ZTEtZGY0YjE0MjYyMmU0XkEyXkFqcGdeQXVyMTAzNTI2Njcy._V1_SX300.jpg"
  },
  {
    "Title": "Pachamanga",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjNmZTY4OGYtZTdmYi00MDgyLWI3NjMtZTNmNGNlNDM4NTdiXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  }
]
Drama=[
  {
    "Title": "Ala Vaikunthapurramuloo",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzVjNThjYzgtODRhYS00N2M0LTg5OWQtMTA0YjBhODJhNzU3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "Title": "Sarileru Neekevvaru",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODllNjZkODEtMGRkNS00YWQzLTg3MTYtMzg2N2U0ODI0Zjk0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg"
  },
  {
    "Title": "Thappad",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWQ1Yzc2NDYtN2RjNC00ZGIyLWJkMjItMDlkODVhNjg0OTczXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    
},
  {
    "Title": "Entha Manchivaadavuraa",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDQyYzExNjAtZjU2Yi00NzFlLTk2ODItOGY4NzU5OTE5MjEyXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_SX300.jpg"
  },
  {
    "Title": "Angrezi Medium",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjlkZjBjZmUtNjZjNS00ODlkLWIzODYtODY0NmViN2E0MjIxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  },
  {
    "Title": "O Pitta Katha",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmY0M2ZiYzktM2EzMy00NWFlLTg2MWMtMjVjMDExOTI0NTc2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg",
  },
  {
    "Title": "Love Aaj Kal",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
   
},
  {
    "Title": "Kannum Kannum Kollaiyadithaal",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2M1MjM0NTUtODlhZS00MWEwLWE3ZWEtZmMzOTNlMmM1MTYyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "Title": "Draupathi",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzU3N2MyMjItNGVmYy00OTY1LThkZDctYWQ0MWE1ODM1YzZmXkEyXkFqcGdeQXVyOTEyMDA0Mzg@._V1_SX300.jpg"
  },
  {
    "Title": "Panga",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDFlMjdmOTktMjQyNi00MjE4LWFiMTMtZmNhYzFjYzMyYTRjXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
},
  {
    "Title": "Dharala Prabhu",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTM4ZmYyNWUtYzU4MS00ODBiLWI4ZTctODgzNzhhZjg2YmFiXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_SX300.jpg"
  },
  {
    "Title": "Dagaalty",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMThmMzVmZmItNjhlYy00NTQ2LTk1NWQtNDU2N2YxOWU0MTRkXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_SX300.jpg",
  },
  {
    "Title": "Seeru",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmYxN2QyN2YtYjhiMS00ZDczLWEyODctNDFkM2UwNjk5MmEwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg"
  },
  {
    "Title": "Panga",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDFlMjdmOTktMjQyNi00MjE4LWFiMTMtZmNhYzFjYzMyYTRjXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
},
  {
    "Title": "Vaanam Kottattum",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDZiNzkxZGUtM2FmZC00NjZmLWE3YzItYjA2MDJlNTJkNGE1XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg"
  },
  {
    "Title": "Adavi",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2E5YTgwY2UtZTRiMS00ZmE0LTg1ODAtNGIxN2I5NDIzYTM2XkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_SX300.jpg"
  },
  {
    "Title": "Irumbu manithan",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGVkOWI4YzUtYTU1ZC00NzZjLTk4ZDgtODAxZDg0OGVlYzlhXkEyXkFqcGdeQXVyMTA0OTExMjQw._V1_SX300.jpg"
  },
  {
    "Title": "Galtha",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWVlZmNkMjctN2VkNS00ODA2LWEwZjYtM2EyMzFiN2M1NzUzXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_SX300.jpg"
  },
  {
    "Title": "Jai Mummy Di",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjEyMjM0ZTYtNzY5Yy00YjE2LWFhZDUtYWY3YTVjOWE0MTAzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
},
  {
    "Title": "Indha Nilai Maarum",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWZjN2M3OGYtZjg5Zi00MzU2LWFkZDctYWNhYjc3MGI1ZDMxXkEyXkFqcGdeQXVyNDgzODc1NDk@._V1_SX300.jpg"
  },
  {
    "Title": "Bloodshot",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_SX300.jpg"
  },
  {
    "Title": "Wild Karnataka",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWNkMjcyODAtMGIwYi00YTA5LTg0Y2EtNmU2YzdhZTA3YjA4XkEyXkFqcGdeQXVyMjcwMzg5MDQ@._V1_SX300.jpg"
  },
  {
    "Title": "Underwater",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzM0OGZiZWItYmZiNC00NDgzLTg1MjMtYjM4MWZhOGZhMDUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Chhapaak",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjZjYzRhMmEtMTU0Ny00YWI4LThiZjEtNWZjMDQ3MTgwZmVhXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
   
},
  {
    "Title": "Bombshell",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjlhOWE3YjktY2MzOC00ZmQ1LWIwNjgtZmVhZmFjZGExMzgyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
  },
  {
    "Title": "Tanhaji: The Unsung Warrior",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDc5ZmQ3MzUtYTY4OS00YTE3LTkwNmItNmQ2ODIwNWM3MzY1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
},
  {
    "Title": "The Last Full Measure" ,
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTQyMjBmNDAtNDA0YS00ODFiLTk2OTUtMWM5NzI4NjM1YzhhXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg"
  },
  {
    "Title": "Just Mercy",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmM4YzA5NjUtZGEyOS00YzllLWJmM2UtZjhhNmJhM2E1NjUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Love Mocktail",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDEwODVjYWQtYTVhNC00YzU0LWFjYTQtZmVlNDk0YmQ1YTY4XkEyXkFqcGdeQXVyNjIwNzA2NzY@._V1_SX300.jpg"
  },
  {
    "Title": "Navelru Half Boiled",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWUyNWNlNWItNDIzYS00ODBlLWI2MzYtMzExNjc4N2Q2MjczXkEyXkFqcGdeQXVyMTA0NzIyMDc1._V1_SX300.jpg"
  },
  {
    "Title": "Gadinaadu",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3NDAxZjktODAzMS00ZmFlLTg1NTYtZjQzMTA2YTJkMjljXkEyXkFqcGdeQXVyNjY0OTkzMjk@._V1_SX300.jpg"
  },
  {
    "Title": "Gift Box",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2IyYzdhZTctODVlZC00ZTZjLThkMTktNmEzY2UwZDI4MzhmXkEyXkFqcGdeQXVyNjU0MDM3OTk@._V1_SX300.jpg"
  },
  {
    "Title": "Good Newwz",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWQzNGQxY2YtNWZjOC00MGU4LTgzNTUtODliOGQzYTkxYzM1XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
    
},
  {
    "Title": "Saagutha Doora Doora",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGU2OTE0NjQtYzFlMS00OWU1LTgwNmUtMTE5ZjljMDE3OTZmXkEyXkFqcGdeQXVyMTA0NzIyMDc1._V1_SX300.jpg"
  },
  {
    "Title": "India vs England",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTk1NTM4NmMtMjg3My00OTk2LWFjMWEtMWZlOTBjZTNlN2ZiXkEyXkFqcGdeQXVyMTEwMDA2Mzc4._V1_SX300.jpg"
  },
  {
    "Title": "Thallumpidi",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDg5MDBkMDgtODU3My00NTQxLWFhNDgtZDg2NDQ0MGM5N2JhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Maarjaara Oru Kalluvacha Nuna",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmY2YzlkMzUtYzMxYS00MmViLTkyZjctMzZlNDEwNWMwNzY2XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Street Dancer 3D",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjZlMTg1NDktNzI2My00Mjg2LTk3NzktZWQ5ZDJhYmJkNGExXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
},
  {
    "Title": "Kuttiyappanum Daivadhootharum",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjYxMmE0YzItNzE3Mi00MTg0LWE0NzMtNTk3YzczZTE5YTBhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Velathaan",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTIxMTBhMTgtYTI5OS00ZWRhLWI2NGQtN2IzNzg0YWQ0ZDFiXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Kalamandalam Hyderali",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTJjNzMzM2UtNTE4ZS00M2Y4LTgxYTctMWIwMGQxZDU3YzkxXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Al Mallu",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU4N2QzOGQtZTNlNi00NDI2LWFkMTYtYjJkODc5YmNlN2ZhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Kottayam",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjgyNmM5MDItNjczOC00YjlmLTlmOGQtOTYwOTA1Njk0MDY2XkEyXkFqcGdeQXVyMzI0NjI4Njk@._V1_SX300.jpg"
  },
  {
    "Title": "Pachamanga",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjNmZTY4OGYtZTdmYi00MDgyLWI3NjMtZTNmNGNlNDM4NTdiXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Uriyattu",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmMwODU4NTUtZjZhYy00ZTBiLWIxZTYtODM4YmY1ZTMwZjRhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  }

]
Romance=[
  {
    "Title": "Bheeshma",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTdhODUxYzYtNzc1Zi00YTMzLThhYzAtMTk3YzIwMjQwYzMwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg"
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
    "Title": "Shubh Mangal Zyada Saavdhan",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTNhOWM4Y2MtZDhjNC00ZTZmLWJkMDUtNGE4Nzg2MzhmMzY0XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    
},
  {
    "Title": "Kannum Kannum Kollaiyadithaal",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2M1MjM0NTUtODlhZS00MWEwLWE3ZWEtZmMzOTNlMmM1MTYyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "Title": "Love Aaj Kal",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
   
},
  {
    "Title": "Gift Box",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2IyYzdhZTctODVlZC00ZTZjLThkMTktNmEzY2UwZDI4MzhmXkEyXkFqcGdeQXVyNjU0MDM3OTk@._V1_SX300.jpg"
  },
  {
    "Title": "Jai Mummy Di",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjEyMjM0ZTYtNzY5Yy00YjE2LWFhZDUtYWY3YTVjOWE0MTAzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
},
  {
    "Title": "Al Mallu",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU4N2QzOGQtZTNlNi00NDI2LWFkMTYtYjJkODc5YmNlN2ZhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Kottayam",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjgyNmM5MDItNjczOC00YjlmLTlmOGQtOTYwOTA1Njk0MDY2XkEyXkFqcGdeQXVyMzI0NjI4Njk@._V1_SX300.jpg"
  },
  {
    "Title": "Sonu Ke Titu Ki Sweety",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGE5MTgtN2YxYS00ODYyLWE1YzQtYzNlMzAyMTBlMWZhXkEyXkFqcGdeQXVyMzcwOTk0MzU@._V1_SX300.jpg",

  }
]
Comedy=[
  {
    "Title": "Bheeshma",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTdhODUxYzYtNzc1Zi00YTMzLThhYzAtMTk3YzIwMjQwYzMwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg"
  },
  {
    "Title": "Sarileru Neekevvaru",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODllNjZkODEtMGRkNS00YWQzLTg3MTYtMzg2N2U0ODI0Zjk0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg"
  },
  {
    "Title": "Angrezi Medium",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjlkZjBjZmUtNjZjNS00ODlkLWIzODYtODY0NmViN2E0MjIxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  },
  {
    "Title": "Dharala Prabhu",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTM4ZmYyNWUtYzU4MS00ODBiLWI4ZTctODgzNzhhZjg2YmFiXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_SX300.jpg"
  },
  {
    "Title": "Dagaalty",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMThmMzVmZmItNjhlYy00NTQ2LTk1NWQtNDU2N2YxOWU0MTRkXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_SX300.jpg"
  },
  {
    "Title": "Taana",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmMwZWRkMDktMDQyYS00NmNlLWEzMDMtMTVkYjg3NmZlNGU1XkEyXkFqcGdeQXVyMzAzMzkzNTU@._V1_SX300.jpg"
  },
  {
    "Title": "Jawaani Jaaneman",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjY1OTI0NjEtNzRmZS00NzFlLTlhMTgtNjdmNWY2MDQ3YzIwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    
},
  {
    "Title": "Oh My Kadavule",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzRiZGZmYWMtMmNhYy00NmE3LTgxZjItMDc1YzMxNTExM2VlXkEyXkFqcGdeQXVyMTEwNjA3NjE1._V1_SX300.jpg"
  },
  {
    "Title": "Sonic the Hedgehog",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
  },
  {
    "Title": "The Gentlemen",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
  },
  {
    "Title": "Dolittle",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Bad Boys for Life",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Shubh Mangal Zyada Saavdhan",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTNhOWM4Y2MtZDhjNC00ZTZmLWJkMDUtNGE4Nzg2MzhmMzY0XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    
},
  {
    "Title": "Jumanji: The Next Level",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Onward",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
  },
  {
    "Title": "Good Newwz",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWQzNGQxY2YtNWZjOC00MGU4LTgzNTUtODliOGQzYTkxYzM1XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
    
},
  {
    "Title": "Like a Boss",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjAyZDRjMjQtODE3MC00ODI2LTgxODktZThjYTgzZDE5NTc4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
  },
   {
    "Title": "Avane Srimannarayana",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzJmNDBlMzUtMjJjMy00YjRjLTliY2MtNjcwMmExODYzYTZmXkEyXkFqcGdeQXVyOTMxMTk2MTc@._V1_SX300.jpg"
  },
  {
    "Title": "Jai Mummy Di",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjEyMjM0ZTYtNzY5Yy00YjE2LWFhZDUtYWY3YTVjOWE0MTAzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
},
  {
    "Title": "Dhamaka",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzg0MjA4NWQtMDdiYS00NWI0LTk0ZWEtMDIyNDljMTlkNjA4XkEyXkFqcGdeQXVyMzQ5Njc3NzU@._V1_SX300.jpg"
  },
  {
    "Title": "Sonu Ke Titu Ki Sweety",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGE5MTgtN2YxYS00ODYyLWE1YzQtYzNlMzAyMTBlMWZhXkEyXkFqcGdeQXVyMzcwOTk0MzU@._V1_SX300.jpg",

}

]
Crime=[
  {
    "Title": "Aswathama",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWE3ZTc1ZjItNWIyMy00Njk4LWJkNjQtNTgzMjg3NmIzNzRlXkEyXkFqcGdeQXVyNjU0Nzg1NzY@._V1_SX300.jpg"
  },
  {
    "Title": "Hit",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjY5OGJhMTMtOTU2Zi00YjdjLTk3YjItMjY5NjUzN2NhMTQ5XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg"
  },
  {
    "Title": "The Gentlemen",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
  },
  {
    "Title": "Bad Boys for Life",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Just Mercy",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmM4YzA5NjUtZGEyOS00YzllLWJmM2UtZjhhNmJhM2E1NjUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Popcorn Monkey Tiger",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmRiOTNmMzctYTc1Mi00YzRkLWE0ZTEtZGY0YjE0MjYyMmU0XkEyXkFqcGdeQXVyMTAzNTI2Njcy._V1_SX300.jpg"
  },
  {
    "Title": "Anjaam Pathiraa",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjYxMWUwNGUtZmRmMy00MDZlLTgwNDMtODVlOGFjMTBlNGJkXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Kottayam",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjgyNmM5MDItNjczOC00YjlmLTlmOGQtOTYwOTA1Njk0MDY2XkEyXkFqcGdeQXVyMzI0NjI4Njk@._V1_SX300.jpg"
  },
  {
    "Title": "The Last Full Measure" ,
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTQyMjBmNDAtNDA0YS00ODFiLTk2OTUtMWM5NzI4NjM1YzhhXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg"
  }
]
Thriller=[
  {
    "Title": "Aswathama",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWE3ZTc1ZjItNWIyMy00Njk4LWJkNjQtNTgzMjg3NmIzNzRlXkEyXkFqcGdeQXVyNjU0Nzg1NzY@._V1_SX300.jpg"
  },
  {
    "Title": "Hit",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjY5OGJhMTMtOTU2Zi00YjdjLTk3YjItMjY5NjUzN2NhMTQ5XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg"
  },
  {
    "Title": "Oka Chinna Viramam",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWRjMTY2YzYtMDRhMi00MTFlLWI5YmYtNjdiZTI2NjZiZDg1XkEyXkFqcGdeQXVyODk4NzY2NzY@._V1_SX300.jpg"
  },
  {
    "Title": "Baaghi 3",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTAxNWE2MDItZWFlNS00MWM1LWI1ZjQtN2I5NDBhNWYzZjNhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
   
  },
  {
    "Title": "Madha",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjk0NWY0MDgtNmI2OC00OGEwLTllYjctNmU0YzRhNDM5Mjg3XkEyXkFqcGdeQXVyNzgxMjUzNzk@._V1_SX300.jpg"
  },
  {
    "Title": "O Pitta Katha",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmY0M2ZiYzktM2EzMy00NWFlLTg2MWMtMjVjMDExOTI0NTc2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg"
  },
  {
    "Title": "Kannum Kannum Kollaiyadithaal",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2M1MjM0NTUtODlhZS00MWEwLWE3ZWEtZmMzOTNlMmM1MTYyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "Title": "Bad Boys for Life",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Underwater",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzM0OGZiZWItYmZiNC00NDgzLTg1MjMtYjM4MWZhOGZhMDUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "The Invisible Man",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Fantasy Island",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWE2ODZhYWYtNTFiYy00MjdmLWIzZGEtNTkyOTc1NDIwMjk4XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
  },
  {
    "Title": "Ondu Shikariya Kathe",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzUxMDYzMjUtZDEzYi00NWMxLThkZGYtYTgwNDEwZWY3MWI0XkEyXkFqcGdeQXVyOTU0ODcyNTY@._V1_SX300.jpg"
  },
  {
    "Title": "Gift Box",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2IyYzdhZTctODVlZC00ZTZjLThkMTktNmEzY2UwZDI4MzhmXkEyXkFqcGdeQXVyNjU0MDM3OTk@._V1_SX300.jpg"
  },
  {
    "Title": "Anjaam Pathiraa",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjYxMWUwNGUtZmRmMy00MDZlLTgwNDMtODVlOGFjMTBlNGJkXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Al Mallu",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU4N2QzOGQtZTNlNi00NDI2LWFkMTYtYjJkODc5YmNlN2ZhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"
  },
  {
    "Title": "Kottayam",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjgyNmM5MDItNjczOC00YjlmLTlmOGQtOTYwOTA1Njk0MDY2XkEyXkFqcGdeQXVyMzI0NjI4Njk@._V1_SX300.jpg"
  }
]
Trending=[
    
      {
        "Title": "Angrezi Medium",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjlkZjBjZmUtNjZjNS00ODlkLWIzODYtODY0NmViN2E0MjIxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      "Title": "Thappad",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWQ1Yzc2NDYtN2RjNC00ZGIyLWJkMjItMDlkODVhNjg0OTczXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      
  },
  {
      "Title": "Bhoot: Part One - The Haunted Ship",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzFlZjA1YzAtMmYwNy00NjQ5LWJkNDUtNzczYjc0NGViNjRjXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
      
  },
  {
      "Title": "Love Aaj Kal",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg",
     
  },
  {
        "Title": "Shubh Mangal Zyada Saavdhan",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTNhOWM4Y2MtZDhjNC00ZTZmLWJkMDUtNGE4Nzg2MzhmMzY0XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
        
   },
   {
    "Title": "Bheeshma",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTdhODUxYzYtNzc1Zi00YTMzLThhYzAtMTk3YzIwMjQwYzMwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg",
  },
 {

    "Title": "Ala Vaikunthapurramuloo",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWE3ZTc1ZjItNWIyMy00Njk4LWJkNjQtNTgzMjg3NmIzNzRlXkEyXkFqcGdeQXVyNjU0Nzg1NzY@._V1_SX300.jpg",
},
{
   "Title": "Sarileru Neekevvaru",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODllNjZkODEtMGRkNS00YWQzLTg3MTYtMzg2N2U0ODI0Zjk0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg",
 },
 {

    "Title": "Hit",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjY5OGJhMTMtOTU2Zi00YjdjLTk3YjItMjY5NjUzN2NhMTQ5XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg",
},
 {

    "Title": "Disco Raja",
     "Poster": "https://m.media-amazon.com/images/M/MV5BMDBlOGNlM2ItZGM3MS00YjA0LThiMjMtYTUzZmE1NWY3MjUzXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg",
},
{
  "Title": "Sonic the Hedgehog",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg",
},
{
  "Title": "Bloodshot",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_SX300.jpg",
},
{
  "Title": "The Gentlemen",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
},
{
  "Title": "Dolittle",
"Poster": "https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
},
{
"Title": "Bad Boys for Life",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg", 
}
]

  teluguArray: any = [[]]
  hindiArray: any = [[]];
  englishArray: any = [[]];
  malyalamArray: any = [[]];
  tamilArray: any = [[]];
  kannadaArray: any = [[]];
  trendingArray: any = [[]];
  actionArray: any = [[]];
  dramaArray: any = [[]];
  thrillerArray: any = [[]];
  romanceArray: any = [[]];
  crimeArray: any = [[]];
  comedyArray: any = [[]];
  horrorArray: any = [[]];
  adventureArray: any = [[]];
  familyArray: any = [[]];
  chunk(arr) {
    //alert("here2")
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += 6) {
      R.push(arr.slice(i, i + 6));
    }
    return R;
  }

  constructor(private router:Router, private api:APIService) { 
  }

  ngOnInit(): void {
    //alert("before");
    this.getMatrices()
    //setTimeout(_ => {this.getMatrices()},1000);
    //Promise.resolve().then(_ => {this.getArrays()});
    //alert("after");
  }
  /*getArrays() {
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
  }*/
  getMatrices() {
    this.teluguArray = this.chunk(this.Telugu.slice(1))
    this.hindiArray = this.chunk(this.Hindi.slice(1))
    this.englishArray = this.chunk(this.English.slice(1))
    this.tamilArray = this.chunk(this.Tamil.slice(1))
    this.malyalamArray = this.chunk(this.Malayalam.slice(1))
    this.kannadaArray = this.chunk(this.Kannada.slice(1))
    this.actionArray = this.chunk(this.Action.slice(1))
    this.dramaArray = this.chunk(this.Drama.slice(1))
    //this.familyArray = this.chunk(this.Family.slice(1))
    this.comedyArray = this.chunk(this.Comedy.slice(1))
    this.crimeArray = this.chunk(this.Crime.slice(1))
    this.thrillerArray = this.chunk(this.Thriller.slice(1))
    //this.adventureArray = this.chunk(this.adventure.slice(1))
    //this.horrorArray = this.chunk(this.horror.slice(1))
    this.romanceArray = this.chunk(this.Romance.slice(1))
    this.trendingArray = this.chunk(this.Trending.slice(1))
  }

  onPosterClick(tit) {
    this.api.setSearch(tit);
    this.router.navigate(['poster']);
  }
  
  /*getTrending() {
    //alert("Here1")
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
        this.malayalam.push({
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
  }*/
  

}
