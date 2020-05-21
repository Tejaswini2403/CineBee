import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {must} from './Val/must.validator';
import { FirebaseUsageService } from '../Services/firebase-usage.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { APIService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    a:Number;
    b:Number;
    users
    
    constructor(private router:Router, private user:UserService,private api:APIService, private formBuilder: FormBuilder,private userDetails:FirebaseUsageService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: must('password', 'confirmPassword')
        });
        this.users=this.userDetails.users
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        this.a=this.registerForm.value.email.indexOf("@");
        this.b=this.registerForm.value.email.indexOf(".com");
        if(this.registerForm.value.firstName==""||this.registerForm.value.lastName==""
            ||this.registerForm.value.email==""||this.registerForm.value.password==""||this.registerForm.value.confirmPassword==""
            ||this.registerForm.value.password!=this.registerForm.value.confirmPassword||this.a==-1||this.b==-1||
            this.registerForm.value.acceptTerms==false)
            return;
        else if(this.userDetails.isUserExist(this.registerForm.value.email)) {
            alert("Account already exist with this Email ID");
        }
        else{
            this.onAddUser(this.registerForm.value.firstName,this.registerForm.value.lastName,this.registerForm.value.email,this.registerForm.value.password)
            this.onSaveUser();
            this.user.setUserLoggedIn();
            this.user.setEmail(this.registerForm.value.email)
            this.router.navigate(['/login']);
        }
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

    onAddUser(fm1,lm1,emailId1,pass1){
        this.users.push({
            fn:fm1,
            ln:lm1,
            emailId:emailId1,
            pass:pass1,
            wishlist:[
                {
                  title:"Madha",
                  poster:"https://m.media-amazon.com/images/M/MV5BYjk0NWY0MDgtNmI2OC00OGEwLTllYjctNmU0YzRhNDM5Mjg3XkEyXkFqcGdeQXVyNzgxMjUzNzk@._V1_SX300.jpg"
                }
            ]
        })
    }
    onSaveUser(){
        this.userDetails.saveUser(this.users).subscribe(
            (response)=>console.log(response),
            (error)=>console.log(error),
        )
    }
    onSearch(ele) {
        this.api.setSearch(ele.target.elements[0].value);
        //alert("in header.ts  "+ele.target.elements[0].value);
        this.router.navigate(['poster']);
        //alert("Here");
      }
      func()
      {
        if(this.user.getUserLoggedIn())
          this.router.navigate(['homepage']);
        else
          this.router.navigate(['firstpage']);
      }

}
