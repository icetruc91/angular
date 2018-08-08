import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
let selfReference;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) {
    selfReference = this;
  }

  username;
  password;
  confirmPassword;


  register(username, password, confirmPassword) {
    if (password === confirmPassword) {
      this.userService.findUserByUsername(username)
        .then(function (user) {
          console.log(user);
          if (user === null) {
            selfReference.userService.createUser(username, password)
              .then(() => selfReference.router.navigate(['profile']));
          }
        });
    } else {
      alert('Password does not match');
    }
  }



  ngOnInit() {
  }

}
