import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  public info;
  constructor(private api:APIService) { }

  ngOnInit(): void {
    this.api.search('Bheeshma'),
    this.api.apiCall().subscribe((data)=>{
      this.info=data
    })
  }

}
