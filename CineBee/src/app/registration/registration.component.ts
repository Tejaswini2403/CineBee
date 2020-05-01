import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

// import custom validator to validate that password and confirm password fields match
import {must} from './Val/must.validator';

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

    constructor(private formBuilder: FormBuilder,private router:Router, private user:UserService) { }

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
        else
            this.router.navigate(['homepage']);
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}
