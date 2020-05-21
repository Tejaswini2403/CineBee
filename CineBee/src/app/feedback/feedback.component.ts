import { Component, OnInit } from '@angular/core';
import { FirebaseUsageService } from '../Services/firebase-usage.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  email
  feedbacks

  constructor(private firebase:FirebaseUsageService,private user:UserService,private router:Router) { }

  ngOnInit(): void {
    this.email=this.user.getEmail();
    this.feedbacks=this.firebase.feedbacks
  }

  onFeedbackSubmit(e) {
    e.preventDefault();
    var feedback = e.target.elements[0].value;
    //alert("in feedbackSubmit "+feedback)
    if(feedback=="")
      alert("Please provide some feedback")
    else {
      this.addFeedback(feedback)
      this.onSaveFeedback()
      this.router.navigate(['/homepage']);
    }
  }
  addFeedback(feedback1) {
    //alert("in add feedback")
    this.feedbacks.push({
      feedback:feedback1
    })
  }
  onSaveFeedback() {
    //alert("in on save feedback")
    this.firebase.saveFeedback(this.feedbacks).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error),
    )
  }

}
