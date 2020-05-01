import { Component, OnInit } from '@angular/core';
import { FirebaseUsageService } from '../Services/firebase-usage.service'

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  data;
  constructor(private firebase:FirebaseUsageService) { }

  ngOnInit(): void {
    this.onFetchData();
  }

  onFetchData() {
    this.firebase.fetchData().subscribe(
      (response)=>{
        const da=JSON.stringify(response)
        console.log(da)
        this.data=JSON.parse(da);
        //console.log(response)
      },
      (error)=>console.log(error),
    )
  }

}
