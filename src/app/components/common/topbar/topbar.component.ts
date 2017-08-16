import {Component, OnInit, EventEmitter, Input, Output} from "@angular/core";
import * as domHelper from "../../../helpers/dom.helper";
import {ThemeService} from "../../../services/theme/theme.service";
import {UserLoginService} from "../../../services/user/user-login.service";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'topbar',
  templateUrl: 'topbar.component.html'

})
export class TopbarComponent implements OnInit {
  @Input() sidenav;
  @Input() notificPanel;
  @Input() currentUser;
  @Output() onLangChange = new EventEmitter<any>();
  currentLang = 'en';
  availableLangs = [{
    name: 'English',
    code: 'en',
  }, {
    name: 'Spanish',
    code: 'es',
  }]
  egretThemes;

  constructor(private themeService: ThemeService,
              public userLoginService: UserLoginService,
              public router: Router,
              public snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.egretThemes = this.themeService.egretThemes;
  }

  setLang() {
    this.onLangChange.emit(this.currentLang);
  }

  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }

  toggleNotific() {
    this.notificPanel.toggle();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  toggleCollapse() {
    let appBody = document.body;
    domHelper.toggleClass(appBody, 'collapsed-menu');
    domHelper.removeClass(document.getElementsByClassName('has-submenu'), 'open');
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl("");
    this.snackBar.open('Success Logout', 'close', { duration: 1000 });
  }

}
