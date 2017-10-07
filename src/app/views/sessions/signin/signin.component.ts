import {Component, OnInit, ViewChild} from "@angular/core";
import {MdProgressBar, MdButton} from "@angular/material";
import {UserLoginService} from "../../../services/user/user-login.service";
import {User} from "../../../models/user/user-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['signin.component.scss']
})
export class SigninComponent implements OnInit {
  @ViewChild(MdProgressBar) progressBar: MdProgressBar;
  @ViewChild(MdButton) submitButton: MdButton;

  signinData = {
    email: '',
    password: '',
    rememberMe: ''
  }

  constructor(public userLoginService: UserLoginService,
              public router: Router) {
  }

  ngOnInit() {
  }

  signin() {
    console.log(this.signinData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';

    let user = new User();
    user.username = this.signinData.email;
    user.password = this.signinData.password;

    console.log(user);
    this.userLoginService.login(user);

    // TODO deal with login result

  }

}
