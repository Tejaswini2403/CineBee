import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  Telugu=[
    {
      Title: "Bheeshma",
      Poster: "https://m.media-amazon.com/images/M/MV5BOTdhODUxYzYtNzc1Zi00YTMzLThhYzAtMTk3YzIwMjQwYzMwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg",
    },
    {
      Title: "Ala Vaikunthapurramuloo",
      Poster: "https://m.media-amazon.com/images/M/MV5BYzVjNThjYzgtODRhYS00N2M0LTg5OWQtMTA0YjBhODJhNzU3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      Title: "Aswathama",
      Poster: "https://m.media-amazon.com/images/M/MV5BNWE3ZTc1ZjItNWIyMy00Njk4LWJkNjQtNTgzMjg3NmIzNzRlXkEyXkFqcGdeQXVyNjU0Nzg1NzY@._V1_SX300.jpg"
    },
    {
      Title: "Sarileru Neekevvaru",
      Poster: "https://m.media-amazon.com/images/M/MV5BODllNjZkODEtMGRkNS00YWQzLTg3MTYtMzg2N2U0ODI0Zjk0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg"
    },
    {
      Title: "Hit",
      Poster: "https://m.media-amazon.com/images/M/MV5BZjY5OGJhMTMtOTU2Zi00YjdjLTk3YjItMjY5NjUzN2NhMTQ5XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg"
    },
    {
      Title:"Disco Raja",
      Poster: "https://m.media-amazon.com/images/M/MV5BMDBlOGNlM2ItZGM3MS00YjA0LThiMjMtYTUzZmE1NWY3MjUzXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg"
    },
    {
      Title: "Valayam",
      Poster: "https://m.media-amazon.com/images/M/MV5BNTA2ZWJjNDItMTcxMi00MGEwLWEyMTUtYWQ2ZDBjMTY3MjNjXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg"
    },
    {
      Title: "Oka Chinna Viramam",
      Poster: "https://m.media-amazon.com/images/M/MV5BOWRjMTY2YzYtMDRhMi00MTFlLWI5YmYtNjdiZTI2NjZiZDg1XkEyXkFqcGdeQXVyODk4NzY2NzY@._V1_SX300.jpg"
    },
    {
      Title: "World Famous Lover",
      Poster: "https://m.media-amazon.com/images/M/MV5BOTA1MzAyZDYtNjhlZC00Mzc0LTgzNTItOTA3YzdiOWM5N2M4XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg"
    },
    {
      Title: "Savaari",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjNkYjNmZTgtNWIwMy00ZGIwLWFhNGMtZjhhMzk4ODI1ZjRjXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg"
    },
    {
      Title: "Entha Manchivaadavuraa",
      Poster: "https://m.media-amazon.com/images/M/MV5BMDQyYzExNjAtZjU2Yi00NzFlLTk2ODItOGY4NzU5OTE5MjEyXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_SX300.jpg"
    },
    {
      Title: "Darbar",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTVmODRhY2EtZmYyZi00Njk5LWIzNzUtZTllYzU4YzlkNTNhXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg"
    },
    {
      Title: "Madha",
      Poster: "https://m.media-amazon.com/images/M/MV5BYjk0NWY0MDgtNmI2OC00OGEwLTllYjctNmU0YzRhNDM5Mjg3XkEyXkFqcGdeQXVyNzgxMjUzNzk@._V1_SX300.jpg"
    },
    {
      Title:"O Pitta Katha",
      Poster: "https://m.media-amazon.com/images/M/MV5BNmY0M2ZiYzktM2EzMy00NWFlLTg2MWMtMjVjMDExOTI0NTc2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SX300.jpg"
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
