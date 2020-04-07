import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-body',
  templateUrl: './homepage-body.component.html',
  styleUrls: ['./homepage-body.component.css']
})
export class HomepageBodyComponent implements OnInit {
  public imagesUrl;
  constructor() { 
  }

  ngOnInit(): void {
    this.imagesUrl = [
      '../../assets/images/moviePosters/img.jfif',
      '../../assets/images/moviePosters/img0.jfif',
      '../../assets/images/moviePosters/img1.jfif',
      '../../assets/images/moviePosters/img2.jfif',
      '../../assets/images/moviePosters/img3.jfif',
      '../../assets/images/moviePosters/img4.jfif',
      '../../assets/images/moviePosters/img5.jfif',
      '../../assets/images/moviePosters/img6.jfif',
      '../../assets/images/moviePosters/img7.jfif',
      '../../assets/images/moviePosters/img8.jfif',
      '../../assets/images/moviePosters/img9.jfif',
      '../../assets/images/moviePosters/img10.jfif',
      '../../assets/images/moviePosters/img11.jfif',
      '../../assets/images/moviePosters/img12.jfif',
      '../../assets/images/moviePosters/img13.jfif',
      '../../assets/images/moviePosters/img14.jfif',
      '../../assets/images/moviePosters/img15.jfif',
      '../../assets/images/moviePosters/img16.jfif',
      '../../assets/images/moviePosters/img17.jfif',
    ];
  }
}
