import { Component, OnInit, ViewChild } from '@angular/core';
import { MdProgressBar, MdButton } from '@angular/material';
import {UserRegisterService} from "../../../services/user/user-register.service";
import {User} from "../../../models/user/user-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild(MdProgressBar) progressBar: MdProgressBar;
  @ViewChild(MdButton) submitButton: MdButton;
  signupData = {
    username: '',
    nickname: '',
    password: '',
    confirmPassword: '',
    isAgreed: ''
  };

  constructor(public userRegisterService: UserRegisterService,
              public router: Router) {}

  ngOnInit() {
  }

  signup() {
    console.log(this.signupData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    let user: User = new User();
    user.nickname = this.signupData.nickname;
    user.username = this.signupData.username;
    user.password = this.signupData.password;
    console.log(user);

    this.userRegisterService.register(user);
      // .subscribe(
      //   data => {
      //     console.log(data);
      //     this.router.navigateByUrl("home");
      //   },
      //   error => {
      //     console.error(error);
      //   }
      // );

  }

}
