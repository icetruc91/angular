import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Route, Router} from "@angular/router";
import {User} from '../models/user.model.client';
import {SectionServiceClient} from "../services/section.service.client";
let selfReference;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  sections = [];
  username = '';
  password = '';
  firstName = '';
  lastName = '';
  phoneNumber = '';
  email = '';
  address = '';
  city = '';
  state = '';
  zip = '';
  user: User = new User();


  constructor(private userService: UserServiceClient,
              private router: Router,
              private sectionService: SectionServiceClient) {

    selfReference = this;
  }

  ngOnInit() {

    this.userService
      .profile()
      .then(user => {
        this.username = user.username;
        this.password = user.password;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.phoneNumber = user.phoneNumber;
        this.email = user.email;
        this.address = user.address;
        this.city = user.city;
        this.state = user.state;
        this.zip = user.zip;
      });

    this.sectionService.findSectionsForStudent()
      .then(sections => this.sections = sections);

  }


  unenroll(section) {
    this.sectionService.findEnrollment(section.sectionId._id)
      .then(function (enrollment) {
        return enrollment;
      })
      .then((enrollment) => {
        return this.sectionService.unenrollStudentFromSection(enrollment)
          .then(function () {
            return selfReference.sectionService.findSectionsForStudent();
          });
      }).then(sections => this.sections = sections);

  }


  update() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.phoneNumber = this.phoneNumber;
    this.user.email = this.email;
    this.user.address = this.address;
    this.user.city = this.city;
    this.user.state = this.state;
    this.user.zip = this.zip;
    this.userService.updateProfile(this.user)
      .then(function (response) {
        console.log(response);
      });
  }

  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['login']));
  }

}





