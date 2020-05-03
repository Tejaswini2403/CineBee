import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  public info;
  constructor(private api:APIService, private router:Router) { }

  ngOnInit(): void {
    //alert("entered in poster")
    this.funCall()
  }

  funCall() {
    this.api.apiCall(this.api.getSearch()).subscribe((data)=>{
      //alert("In poster  " +this.api.getSearch())
      this.info=data
      //alert("got data  "+this.info.Title)
      if(this.info.Title==undefined){
        this.router.navigate(['movieNotFound'])
      }
    })
  }

}
