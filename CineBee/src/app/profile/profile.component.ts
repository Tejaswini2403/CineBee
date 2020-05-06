import { Component, OnInit } from '@angular/core';
import { FirebaseUsageService } from '../Services/firebase-usage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  fn:string='Tejaswini'
  ln:string='Repala'
  email:string='trepala999@gmail.com'

  constructor(private firebase:FirebaseUsageService,private user:UserService) { }

  ngOnInit(): void {
    this.email=this.user.getEmail();
    this.fn=this.firebase.onFirstNameFecth(this.email);
    this.ln=this.firebase.onLastNameFecth(this.email);
  }


}
