import { Component, OnInit } from '@angular/core';
// Import the User model
import { User } from './../User';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  //Property for the gender
  private gender: string[];
  //Property for the user
  private user:User;

  ngOnInit() {

    this.gender =  ['Male', 'Female', 'Others'];
    //Create a new user object
    this.user = new User({email:"", password: { pwd: "" , confirmPwd: ""}, gender: this.gender[0]});
  }

  log(object) {
  	console.log(object);
  }

   onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    	this.user = value;
    	console.log( this.user);
    	console.log("valid: " + valid);
  	}
}

