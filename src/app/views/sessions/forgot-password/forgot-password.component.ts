import {Component, OnInit, ViewChild} from "@angular/core";
import {MdProgressBar, MdButton} from "@angular/material";
import {ForgetPwdService} from "../../../services/user/forget-pwd.service";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public userEmail: string;
  public message: string;
  public messageType: string;
  @ViewChild(MdProgressBar) progressBar: MdProgressBar;
  @ViewChild(MdButton) submitButton: MdButton;

  constructor(public forgetPwdService: ForgetPwdService) {
  }

  ngOnInit() {
  }

  submitEmail() {
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';

    this.forgetPwdService.sendValidationEmail(this.userEmail)
      .subscribe(
        data => {
          this.message = data.message;
          this.messageType = "success";
        },
        error => {
          this.message = error.messge;
          this.messageType = "danger";
        }
      );
  }
}
